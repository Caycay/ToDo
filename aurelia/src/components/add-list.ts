import { EventAggregator } from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'
import {ListHttpService} from "../api/list-http-service";
import {ApiList} from "../models/api-data-models";
@inject(EventAggregator, ListHttpService)
export class AddList{
  list: ApiList;

  constructor(private ea: EventAggregator, private httpService){
    this.list = {name: '', description: '', id: '', items: []};

  }
  add(){
    console.log(this.list);
    this.httpService.addList(this.list).then((response)=>{
      this.ea.publish('ListItem:save');
    }).catch(err=>console.log('error:', err));
  }
}
