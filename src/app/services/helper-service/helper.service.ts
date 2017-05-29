import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  constructor() { }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

}
