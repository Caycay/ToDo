import {apiServer} from "../const";
import fetch from "http-fetch-client/es/fetch";
class ApiService extends Request{

    static apiGet(endpointUrl) {
        const headers = {};
        return axios(apiServer.url + endpointUrl, {method: 'GET', headers})
    }
}

export default  ApiService;