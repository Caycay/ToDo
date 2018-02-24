import { EventAggregator } from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'
import {ApiItem} from "../models/api-data-models";
import {ItemHttpService} from "../api/item-http-service";

@inject(EventAggregator, ItemHttpService)
export class ListOfItem{
  items: Array<ApiItem>;

  constructor(private ea: EventAggregator, private httpService){

  }
  activate(params){
    this.items = params.details;
    console.log(this.items);


  }
  getItem(idList: string){
    this.httpService.getAllItem(idList).then((result) => {
      this.items = result;
    });
  }
  add(){
    this.ea.publish('ListOfItem:add', this.items[0].listId);
  }
  deleteItem(idItem:string, idList:string){
    this.httpService.deleteItem(idItem, idList).then((response)=>{
      this.httpService.getAllItem(this.items[0].id);
    });
  }
  editItem(item: ApiItem){
    this.ea.publish('ListOfItem:edit', item);
  }
}
