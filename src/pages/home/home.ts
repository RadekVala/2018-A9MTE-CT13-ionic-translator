import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslationProvider } from '../../providers/translation/translation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private inputModel:string = 'Test';

  constructor(
    public navCtrl: NavController,
    private translationProvider: TranslationProvider
  ) {
   
  }

  public btnTranslateClicked (userInput:string):void {
    console.log('btn Clicked: ', this.inputModel);
    this.translationProvider.http;
  }

}
