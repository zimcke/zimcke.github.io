import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {DEV_BLOG_ROUTES} from '../blog/dev/developer-blog-routing.module';
import {GAME_BLOG_ROUTES} from '../blog/gaming/gaming-blog-routing.module';

@NgModule({
    imports: [SharedModule, HomeRoutingModule],
    exports: [HomeComponent],
    declarations: [HomeRoutingModule.components],
    providers: [{provide: 'DEV_ROUTES', useValue: DEV_BLOG_ROUTES},
        {provide: 'GAME_ROUTES', useValue: GAME_BLOG_ROUTES}]
})
export class HomeModule {
}
