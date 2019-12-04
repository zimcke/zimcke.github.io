import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BioComponent} from './bio.component';

const BIO_ROUTES: Routes = [
  { path: '', component: BioComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(BIO_ROUTES) ],
  exports: [ RouterModule ]
})
export class BioRoutingModule {
  static components = [ BioComponent ];
}
