import {NgModule} from '@angular/core';

import {SharedModule} from '../../../shared/shared.module';
import {GAME_BLOG_ROUTES, GamingBlogRoutingModule} from './gaming-blog-routing.module';
import {GamingBlogComponent} from './gaming-blog.component';
import {PlaceholderComponent} from './post/placeholder.component';

@NgModule({
    imports: [SharedModule, GamingBlogRoutingModule],
    exports: [GamingBlogComponent, PlaceholderComponent],
    declarations: [GamingBlogRoutingModule.components],
    providers: [{provide: 'GAME_ROUTES', useValue: GAME_BLOG_ROUTES}]
})
export class GamingBlogModule {
}
