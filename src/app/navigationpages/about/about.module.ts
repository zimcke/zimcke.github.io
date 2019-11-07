import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {AboutComponent} from './about.component';
import {AboutRoutingModule} from "./about-routing.module";

@NgModule({
    imports: [SharedModule, AboutRoutingModule],
    exports: [AboutComponent],
    declarations: [AboutRoutingModule.components]
})
export class AboutModule {
}
