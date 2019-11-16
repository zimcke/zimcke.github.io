import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-custom-breadcrumb',
  templateUrl: './custom-breadcrumb.component.html'
})
export class CustomBreadcrumbComponent {

  constructor(private activatedRoute: ActivatedRoute) {}

  hideBreadcrumb(): boolean {
      try{
          return this.activatedRoute.snapshot.firstChild.routeConfig.path === '';
      } catch (e) {
          return true;
      }
  }

}
