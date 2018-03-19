import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Document} from './document';



@Injectable()
export class DocumentService {

  private documentsUrl = 'http://localhost:3001/freelance_documents.json';

  constructor(
  private http: Http) {}

  getDocuments (): Observable <Document[]> {
    return this.http.get(this.documentsUrl)
                      .map((response: Response) => <Document[]>response.json())
                      .catch(this.handleError);
  }

  
  DocumentService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };


}
