import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework'
import {ItemHttpService} from "../api/item-http-service";
import {ApiItem, ApiList} from "../models/api-data-models";
import {ListHttpService} from "../api/list-http-service";

@inject(EventAggregator, ItemHttpService, ListHttpService)
export class EditItem {
  item: ApiItem;
  list: ApiList;

  constructor(private ea: EventAggregator, private itemService: ItemHttpService, private listService: ListHttpService) {
  }

  activate(params) {
    this.item = params.idItem;
    this.getItem(params.idList, params.idItem)
  }

  getItem(idList: string, idItem: string) {
    this.itemService.getItemById(idList, idItem).then((response) => {
      this.item = response;
    });
  }

  edit() {
    this.itemService.editItem(this.item).then((response) => {
      const idList = this.item.listId;
      this.ea.publish('GoToDetails:next', idList);
    }).catch(err => console.log("error:", err));
  }
}
