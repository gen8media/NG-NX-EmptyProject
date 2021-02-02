import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'any'
  // providedIn: 'any' or 'root'. With providedIn: 'any', all eagerly loaded modules share a singleton instance; however, lazy loaded modules each get their own unique instance, as shown in the following diagram.
})
export class HttpManagerService {

  constructor() {
  }

  http() {

  }
}
