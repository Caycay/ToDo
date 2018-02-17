import {apiServer} from "../../constant/const";
import {Component} from 'react'
class ApiService extends Component {
    static apiGetAll(endpointUrl) {
        return fetch(apiServer.url + endpointUrl)
            .then(response => response.json());
    }

    static apiGetById(endpoint, id) {
        return fetch(apiServer.url + endpoint.replace(/:id/, id + ''))
            .then(response => response.json());
    }

    static apiPut(endpointUrl, id, data) {
        return fetch(apiServer.url + endpointUrl.replace(/:id/, id + ''), {
                method: 'PUT',
                mode: 'CORS',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                return response;
        }).catch(err => err);
    }
    static apiPost(endpointUrl, data) {
        return fetch(apiServer.url + endpointUrl, {
            method: 'POST',
            mode: 'CORS',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response;
        }).catch(err => err);
    }
    static apiDelete(endpointUrl, id) {
        return fetch(apiServer.url + endpointUrl.replace(/:id/, id + ''), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response;
        }).catch(err => err);
    }
}

export default  ApiService;