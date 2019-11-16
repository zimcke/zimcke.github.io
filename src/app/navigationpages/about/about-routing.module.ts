import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AboutComponent} from './about.component';

const ABOUT_ROUTES: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(ABOUT_ROUTES) ],
  exports: [ RouterModule ]
})
export class AboutRoutingModule {
  static components = [ AboutComponent ];
}
