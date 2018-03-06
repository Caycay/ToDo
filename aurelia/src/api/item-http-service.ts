import {ApiHttpService} from "./api-http-service";
import {apiServer} from "../const";
import {ApiItem, ApiList} from "../models/api-data-models";
export class ItemHttpService extends ApiHttpService{
  getAllItem(id: string){
    return this.apiGet(apiServer.method.items.replace(/:id/, `${id}`)).then(res=>{return res.json()});
  }
  addItem(item: ApiItem){
    return this.apiPost(apiServer.method.item, item).then(res=>res.json());
  }
  deleteItem(idList:string, idItem:string){
    return this.apiDelete(apiServer.method.itemWithId.replace(/:id/, `${idList}`).replace(/:idItem/, `${idItem}`));
  }
  editItem(item: ApiItem){
    return this.apiPut(apiServer.method.itemWithId.replace(/:id/, `${item.id}`), item).then(res=>res.json());
  }
}
