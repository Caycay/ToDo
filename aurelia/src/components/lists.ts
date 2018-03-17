import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'
import {ListHttpService} from "../api/list-http-service";
import {List} from "../models/models";
import {ApiList} from "../models/api-data-models";

@inject(EventAggregator, ListHttpService)
export class Lists {
  lists: Array<List>;

  constructor(private ea: EventAggregator, private listApi) {
    this.ea.publish('blockUI');

  }

  attached() {
    this.getList();
    this.ea.publish('blockUI');
  }

  getList() {
    this.listApi.getAllList().then((response) => {
      this.lists = (response);
    });
  }

  next(idList: string) {
    this.ea.publish('GoToDetails:next', idList);
  }

  add() {
    this.ea.publish('ListItem:add');
  }

  deleteList(id: string) {
    this.listApi.deleteList(id).then((response) => {
      this.getList();
    });

  }

  editList(listId: string) {
    this.ea.publish('ListItem:edit', {listId});
  }
}
