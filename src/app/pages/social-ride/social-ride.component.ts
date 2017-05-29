import { Component, OnInit } from '@angular/core';
import {HelperService} from "../../services/helper-service/helper.service";

@Component({
  selector: 'app-social-ride',
  templateUrl: './social-ride.component.html',
  styleUrls: ['./social-ride.component.scss']
})
export class SocialRideComponent implements OnInit {

  constructor(private helperService: HelperService) { }

  ngOnInit() {
    this.helperService.scrollToTop();
  }

}
