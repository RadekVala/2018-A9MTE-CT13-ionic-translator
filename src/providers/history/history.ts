import { Injectable } from '@angular/core';
import { HistoryRecord } from '../../models/history-record';

/*
  Generated class for the HistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryProvider {

  private historyArray:Array<HistoryRecord> = [];

  constructor() {
    console.log('Hello HistoryProvider Provider');
  }

  public saveToHistory(from:string, to:string):void{
    // single item for history array
    let record = new HistoryRecord(from, to);
    // push record to history array
    this.historyArray.push(record);
  }

  public getHistory():Array<HistoryRecord> {
    return this.historyArray;
  }

}
