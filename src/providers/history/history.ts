import { Injectable } from '@angular/core';
import { HistoryRecord } from '../../models/history-record';
import { Storage } from '@ionic/storage';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

  private historyArray:Array<HistoryRecord> = [];

  constructor(
    private storage: Storage,
  ) {
    console.log('Hello HistoryProvider Provider');

    this.storage.get('history').then(
      (value) => {
        if(value){
          // something were in storage
          this.historyArray = JSON.parse(value);
        }
      }
    );
  }

  public saveToHistory(from:string, to:string):void{
    // single item for history array
    let record = new HistoryRecord(from, to);
    // push record to history array
    this.historyArray.push(record);
    // save to persitant storage
    this.storage.set('history', JSON.stringify(this.historyArray));
  }

  public getHistory():Array<HistoryRecord> {
    return this.historyArray;
  }

}
