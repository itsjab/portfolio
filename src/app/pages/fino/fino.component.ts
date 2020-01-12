import { Component, OnInit } from '@angular/core';
import {HelperService} from '../../services/helper-service/helper.service';

@Component({
  selector: 'app-fino',
  templateUrl: './fino.component.html',
  styleUrls: ['./fino.component.scss']
})
export class FinoComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.helperService.scrollToTop();
  }
}
