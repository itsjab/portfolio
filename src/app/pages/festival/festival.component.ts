import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../services/helper-service/helper.service";

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss']
})
export class FestivalComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.helperService.scrollToTop();
  }

}
