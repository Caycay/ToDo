import {apiServer} from "../const";
import * as axios from "axios";
class ApiService extends Request{

    static apiGet(endpointUrl) {
        const headers = {};
        return axios(apiServer.url + endpointUrl, {method: 'GET', headers})
    }
}

export default  ApiService;