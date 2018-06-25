import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Message} from '../../message';

@Injectable()
export class SendMessageService {

  private messageUrl = 'https://mailer-taglenvlcr.now.sh';

  constructor(private http: Http) {
  }

  sendMessage(message: Message): Promise<Message> {

    const headers = new Headers({'Content-type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    console.log(message);

    return this.http.post(this.messageUrl, message, options)
      .toPromise()
      .then(() => {
        console.log('We did it');
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
