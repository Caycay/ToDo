import {apiServer} from "../../constant/const";
import React, {Component} from 'react'
class ApiService extends Component{
    constructor(props){
        super(props);
        this.state = {
            lists: []
        };

    }

    static apiGet(endpointUrl) {
        endpointUrl = apiServer.method.lists;
        const headers = {};
        return fetch(apiServer.url + endpointUrl)
            .then(response=> response.json());
    }
}

export default  ApiService;