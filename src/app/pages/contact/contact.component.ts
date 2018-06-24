import {Component, OnInit} from '@angular/core';
import {HelperService} from '../../services/helper-service/helper.service';

import { Message } from '../../message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageSent = false;
  message = new Message('', '', '', '');

  constructor(private helperService: HelperService) {
  }

  ngOnInit() {
    this.helperService.scrollToTop();
  }

  sendMessage(): void {
    this.messageSent = true;
  }
}
