import {NgModule} from '@angular/core';

import {SharedModule} from '../../../shared/shared.module';
import {ChineseBlogRoutingModule, CHINESE_BLOG_ROUTES} from './chinese-blog-routing.module';
import {ChineseBlogComponent} from './chinese-blog.component';
import {WojiaComponent} from './post/wojia.component';

@NgModule({
    imports: [SharedModule, ChineseBlogRoutingModule],
    exports: [ChineseBlogComponent, WojiaComponent],
    declarations: [ChineseBlogRoutingModule.components],
    providers: [{provide: 'CHINESE_ROUTES', useValue: CHINESE_BLOG_ROUTES}]
})
export class ChineseBlogModule {
}
