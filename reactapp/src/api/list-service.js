import ApiService from './api-service'
import {apiServer} from "../const";
class ListService{

    static getAllLists(){
        return ApiService.apiGet(apiServer.method.lists).then(res=>{
            return res.data;
        });
    }


}

export default  ListService;
