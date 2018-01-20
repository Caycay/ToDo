import { HttpClient } from 'aurelia-fetch-client';
import { Redirect } from 'aurelia-router';

export class HttpService extends HttpClient{
  private suppressConsoleOutput = true;

  constructor() {
    super();
  }

  protected log(a: any) {
    if (this.suppressConsoleOutput) {
      return;
    }
    console.log(`[${this.constructor.name}]`, a);
  }

  protected getInterceptors() {
    const self = this;
    return {
      request(request) {
        self.log(`Requesting ${request.method} ${request.url}`);
        return request;
      },
      response(response: Response) {
        self.log(`Received ${response.status} ${response.url}`);

        if (/^401/.test(response.status + '')) {
          return response.json().then(err => Promise.reject(new Redirect('/list')));
        }
        if (!/^2\d{2}/.test(response.status + '')) {
          return response.json().then(err => Promise.reject(err));
        }

        return response;
      }
    };
  }

}
