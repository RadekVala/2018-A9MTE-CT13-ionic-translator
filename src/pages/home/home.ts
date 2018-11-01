import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';
import { HistoryProvider } from '../../providers/history/history';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private inputModel:string = '';
  private result:string;

  constructor(
    public navCtrl: NavController,
    private translationProvider: TranslationProvider,
    private historyProvider: HistoryProvider,
    private tts: TextToSpeech
  ) {
   
  }

  public btnTranslateClicked (userInput:string):void {
    console.log('btn Clicked: ', this.inputModel);
    
    let response = this.translationProvider.getTranslation(userInput);
    // handle the response from API
    response.subscribe(
      (resp) => {
        console.log(resp);
        this.result = resp.responseData.translatedText;

        // save record to history
        this.historyProvider.saveToHistory(this.inputModel,this.result);

        // speak the result
        this.tts.speak(this.result)
        .then(() => console.log('Success'))
        .catch((reason: any) => console.log(reason));
      }
    );
    
  }

}
