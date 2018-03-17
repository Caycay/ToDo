import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'
import {ApiItem} from "../models/api-data-models";
import {ItemHttpService} from "../api/item-http-service";

@inject(EventAggregator, ItemHttpService)
export class ListOfItem {
  items: Array<ApiItem>;
  idList: string;
  constructor(private ea: EventAggregator, private httpService) {

  }

  activate(params) {
    this.idList = params.idList;
    this.getItem(this.idList);
  }

  getItem(idList: string) {
    this.httpService.getItemsByListId(idList).then((result) => {
      this.items = result;
    });
  }

  add() {
    this.ea.publish('ListOfItem:add', this.idList);
  }

  deleteItem(idItem: string, idList: string) {
    this.httpService.deleteItem(idItem, idList).then((response) => {
      this.httpService.getItemById(this.items[0].id);
    });
  }

  editItem(idItem: string, idList: string) {
    this.ea.publish('ListOfItem:edit', {idItem: idItem, idList: idList});
  }
}
