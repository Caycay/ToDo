import {ApiHttpService} from "./api-http-service";
import {apiServer} from "../const";
import {ApiList} from "../models/api-data-models";
export class ListHttpService extends ApiHttpService{
  getAllList(){
    return this.apiGet(apiServer.method.lists).then(res=>{return res.json()});
  }
  addList(list: ApiList){
    return this.apiPost(apiServer.method.lists, list).then(res=>res.json());
  }
  deleteList(id:string){
    return this.apiDelete(apiServer.method.listWithId.replace(/:id/, `${id}`));
  }
  editList(list: ApiList){
    return this.apiPut(apiServer.method.listWithId.replace(/:id/, `${list.id}`), list).then(res=>res.json());
  }
  getListById(id:string){
    return this.apiGet(apiServer.method.listWithId.replace(/:id/, `${id}`)).then(res=>res.json());
  }
}
