import {apiServer} from "../../constant/const";
import {Component} from 'react'
class ApiService extends Component {
    static apiGetList(endpointUrl) {
        return fetch(apiServer.url + endpointUrl)
            .then(response => response.json());
    }

    static apiGetItems(endpointUrl, listId) {
        return fetch(apiServer.url + endpointUrl.replace(/:id/, listId + ''))
            .then(response => response.json());
    }
}

export default  ApiService;