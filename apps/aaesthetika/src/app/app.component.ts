import {Component} from '@angular/core';
import {SiteService} from '@nx-workspace/api'

@Component({
  selector: 'nx-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private site: SiteService) {
  }

  // title = 'foo';
  title = this.site.get().title;
}
