import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'
import {ListHttpService} from "../api/list-http-service";
import {ApiList} from "../models/api-data-models";

@inject(EventAggregator, ListHttpService)
export class EditList {
  list: ApiList;

  constructor(private ea: EventAggregator, private httpService) {
    //this.list = {name: '', description: '', id: '', items: []};
  }

  activate(params) {
    const listId = params.listId;
    this.httpService.getListById(listId).then((response)=>{
      this.list = response;
    })
  }

  updateList() {
    this.httpService.editList(this.list).then((response) => {
      this.ea.publish('ListItem:save');
    }).catch(err => console.log('error:', err));
  }
}
