import { EventAggregator } from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'
import {ItemHttpService} from "../api/item-http-service";
import {ApiItem} from "../models/api-data-models";

@inject(EventAggregator, ItemHttpService)
export class AddItem{
  item: ApiItem;

  constructor(private ea: EventAggregator, private httpService){
  }
  activate(params){
    this.item = {propertyString: '', propertyString2: '', propertyNumber: null, listId: params.id, id: '', done: false };

  }
  add(){
    this.httpService.addItem(this.item).then((response)=>{
      this.ea.publish('Item:save')

    }).catch(err=>console.log("error:", err));
  }
}
