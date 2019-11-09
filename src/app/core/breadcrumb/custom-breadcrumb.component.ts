import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'cm-custom-breadcrumb',
  templateUrl: './custom-breadcrumb.component.html'
})
export class CustomBreadcrumbComponent {

  constructor(private router: Router) {}

  hideBreadcrumb(): boolean {
      return this.router.url === '/';
  }

}
