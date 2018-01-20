import { EventAggregator } from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'
import {ListHttpService} from "../api/list-http-service";
import {ApiList} from "../models/api-data-models";
import {debug} from "util";
@inject(EventAggregator, ListHttpService)
export class EditList{
  list: ApiList;

  constructor(private ea: EventAggregator, private httpService){
    this.list = {name: '', description: '', id: '', items: []};
  }
  activate(params){
    this.list = params;
  }
  updateList(){
    console.log(this.list);
    this.httpService.editList(this.list).then((response)=>{
      this.ea.publish('ListItem:save');
    }).catch(err=>console.log('error:', err));
  }
}
