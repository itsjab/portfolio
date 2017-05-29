import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../services/helper-service/helper.service";

@Component({
  selector: 'app-frozen-sea',
  templateUrl: './frozen-sea.component.html',
  styleUrls: ['./frozen-sea.component.scss']
})
export class FrozenSeaComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.helperService.scrollToTop();
  }

}
