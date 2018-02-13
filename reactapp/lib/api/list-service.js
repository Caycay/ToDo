import ApiService from './api-service'
import {apiServer} from "../const";
class ListService{

    static getAllLists(){
        return ApiService.apiGet(apiServer.method.lists).then(res=>{
            debugger;
            return res._xhr.json();
        });
    }
}
export default  ListService;