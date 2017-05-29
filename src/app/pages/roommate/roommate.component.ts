import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../services/helper-service/helper.service";

@Component({
  selector: 'app-roommate',
  templateUrl: './roommate.component.html',
  styleUrls: ['./roommate.component.scss']
})
export class RoommateComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.helperService.scrollToTop();
  }

}
