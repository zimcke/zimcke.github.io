import {NgModule} from '@angular/core';

import {SharedModule} from '../../../shared/shared.module';
import {DeveloperBlogRoutingModule, DEV_BLOG_ROUTES} from './developer-blog-routing.module';
import {DeveloperBlogComponent} from './developer-blog.component';
import {GraphqlComponent} from './post/graphql.component';
import {MongodbComponent} from './post/mongodb.component';

@NgModule({
    imports: [SharedModule, DeveloperBlogRoutingModule],
    exports: [DeveloperBlogComponent, GraphqlComponent, MongodbComponent],
    declarations: [DeveloperBlogRoutingModule.components],
    providers: [{provide: 'DEV_ROUTES', useValue: DEV_BLOG_ROUTES}]
})
export class DeveloperBlogModule {
}
