import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../services/helper-service/helper.service";

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.scss']
})
export class TimComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.helperService.scrollToTop();
  }

}
