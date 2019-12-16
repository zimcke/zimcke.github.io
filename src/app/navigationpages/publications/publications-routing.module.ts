import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PublicationsComponent} from './publications.component';

const PUBLICATIONS_ROUTES: Routes = [
  { path: '', component: PublicationsComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(PUBLICATIONS_ROUTES) ],
  exports: [ RouterModule ]
})
export class PublicationsRoutingModule {
  static components = [ PublicationsComponent ];
}
