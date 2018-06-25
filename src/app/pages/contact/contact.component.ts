import {Component, OnInit} from '@angular/core';
import {HelperService} from '../../services/helper-service/helper.service';

import { Message } from '../../message';
import {SendMessageService} from '../../services/send-message-service/send-message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageSent = false;
  message = new Message('', '', '', '');

  constructor(private helperService: HelperService,
              private sendMessageService: SendMessageService) {
  }

  ngOnInit() {
    this.helperService.scrollToTop();
  }

  sendMessage(): void {
    this.sendMessageService.sendMessage(this.message);
    this.messageSent = true;
  }
}
