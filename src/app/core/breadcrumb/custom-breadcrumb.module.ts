import { NgModule, Optional, SkipSelf } from '@angular/core';

import { EnsureModuleLoadedOnceGuard } from '../ensure-module-loaded-once.guard';
import {CustomBreadcrumbComponent} from './custom-breadcrumb.component';
import {BreadcrumbModule} from 'xng-breadcrumb';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [BreadcrumbModule, SharedModule],
  exports: [CustomBreadcrumbComponent],
  declarations: [CustomBreadcrumbComponent]
})
export class CustomBreadcrumbModule extends EnsureModuleLoadedOnceGuard {    // Ensure that ModalModule is only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CustomBreadcrumbModule) {
    super(parentModule);
  }

}
