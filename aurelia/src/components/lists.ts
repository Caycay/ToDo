import { EventAggregator } from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'
import {ListHttpService} from "../api/list-http-service";
import {List} from "../models/models";
import {ApiList} from "../models/api-data-models";

@inject(EventAggregator, ListHttpService)
export class Lists{
  lists: Array<List>;

  constructor(private ea: EventAggregator, private listApi){

  }

  attached(){
    this.getList();
  }
  getList(){
    this.listApi.getAllList().then((response)=>{
      this.lists = (response);
    });
  }
  next(details?:Array<Object>, id?:string){
    if(details.length > 0){
      this.ea.publish('GoToDetails:next', {details});
    }
    else{
      this.ea.publish('ListOfItem:add', {id});
    }
  }
  add(){
    this.ea.publish('ListItem:add');
  }
  deleteList(id: string){
    this.listApi.deleteList(id).then((response)=>{
      this.getList();
    });

  }
  editList(list: ApiList){
    this.ea.publish('ListItem:edit', list);

  }
}
