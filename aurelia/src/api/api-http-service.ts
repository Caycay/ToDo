import {apiServer} from "../const";
import {HttpService} from "./http-service";
export class ApiHttpService extends HttpService{
  constructor(){
    super();
    this.configure(config => {
      config.withDefaults({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        })
        .withInterceptor(this.getInterceptors())
        .withBaseUrl(apiServer.url)
    })
  }
  getAllList(){
    return this.apiGet(apiServer.method.lists);
  }
  apiGet(endpointUrl: string){
    const headers = {};
    return this.fetch(endpointUrl, {method: 'GET', headers})
  }
  apiPost(endpointUrl: string, payload: any){
    const headers = {};
    return this.fetch(endpointUrl, {method: 'POST', headers, body: JSON.stringify(payload)})
  }
  apiDelete(endpointUrl: string){
    const headers = {};
    return this.fetch(endpointUrl, {method: 'DELETE', headers});
  }
  apiPut(endpointUrl: string, payload: any){
    const headers = {};
    return this.fetch(endpointUrl, {method: 'put', headers, body: JSON.stringify(payload)});
  }
}
