import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {BioComponent} from './bio.component';
import {BioRoutingModule} from './bio-routing.module';

@NgModule({
    imports: [SharedModule, BioRoutingModule],
    exports: [BioComponent],
    declarations: [BioRoutingModule.components]
})
export class BioModule {
}
