import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../services/helper-service/helper.service";

@Component({
  selector: 'app-buntes-deutschland',
  templateUrl: './buntes-deutschland.component.html',
  styleUrls: ['./buntes-deutschland.component.scss']
})
export class BuntesDeutschlandComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.helperService.scrollToTop();
  }

}
