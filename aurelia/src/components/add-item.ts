import { EventAggregator } from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'
import {ItemHttpService} from "../api/item-http-service";
import {ApiItem} from "../models/api-data-models";

@inject(EventAggregator, ItemHttpService)
export class AddItem{
  item: ApiItem;
  idList : string;
  constructor(private ea: EventAggregator, private httpService){
  }
  activate(params){
    console.log(params);
    this.idList = params.id.id;
    debugger;
    this.item = {propertyString: '', propertyString2: '', propertyNumber: null, listId: this.idList, id: '', done: false };

  }
  add(){
    this.httpService.addItem(this.item).then((response)=>{
      this.ea.publish('Item:save')

    }).catch(err=>console.log("error:", err));
  }
}
