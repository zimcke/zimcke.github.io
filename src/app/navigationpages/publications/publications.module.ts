import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {PublicationsComponent} from './publications.component';
import {PublicationsRoutingModule} from './publications-routing.module';

@NgModule({
    imports: [SharedModule, PublicationsRoutingModule],
    exports: [PublicationsComponent],
    declarations: [PublicationsRoutingModule.components]
})
export class PublicationsModule {
}
