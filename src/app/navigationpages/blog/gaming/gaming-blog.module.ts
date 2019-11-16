import {NgModule} from '@angular/core';

import {SharedModule} from '../../../shared/shared.module';
import {GamingBlogRoutingModule} from './gaming-blog-routing.module';
import {GamingBlogComponent} from './gaming-blog.component';

@NgModule({
    imports: [SharedModule, GamingBlogRoutingModule],
    exports: [GamingBlogComponent],
    declarations: [GamingBlogRoutingModule.components]
})
export class GamingBlogModule {
}
