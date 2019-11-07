import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {BlogRoutingModule} from './blog-routing.module';

@NgModule({
    imports: [SharedModule, BlogRoutingModule],
    exports: [],
    declarations: [BlogRoutingModule.components]
})
export class BlogModule {
}
