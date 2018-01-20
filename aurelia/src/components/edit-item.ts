import { EventAggregator } from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'
import {ItemHttpService} from "../api/item-http-service";
import {ApiItem, ApiList} from "../models/api-data-models";
import {ListHttpService} from "../api/list-http-service";

@inject(EventAggregator, ItemHttpService, ListHttpService)
export class EditItem{
  item: ApiItem;
  list: ApiList;
  constructor(private ea: EventAggregator, private httpService, private listHttpService){
  }
  activate(params){
    this.item = params;
    this.listHttpService.getAllList().then((response: Array<ApiList>)=>{
      this.list = response.find(x=>x.id == this.item.listId);
      console.log(this.list);

    });
  }
  edit(){
    this.httpService.editItem(this.item).then((response)=>{
      this.ea.publish('GoToDetails:next', this.list.items);

    }).catch(err=>console.log("error:", err));
  }
}
