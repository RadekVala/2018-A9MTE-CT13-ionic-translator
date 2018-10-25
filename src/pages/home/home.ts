import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private inputModel:string = '';
  private result:string;

  constructor(
    public navCtrl: NavController,
    private translationProvider: TranslationProvider
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
      }
    );
  }

}
