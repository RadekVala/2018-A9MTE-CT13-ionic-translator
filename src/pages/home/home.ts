import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private inputModel:string = 'Test';

  constructor(public navCtrl: NavController) {
   
  }

  public btnTranslateClicked (userInput:string):void {
    console.log('btn Clicked: ', this.inputModel);

  }

}
