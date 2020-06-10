import {NgModule} from '@angular/core';

import {SharedModule} from '../../../shared/shared.module';
import {DeveloperBlogRoutingModule, DEV_BLOG_ROUTES} from './developer-blog-routing.module';
import {DeveloperBlogComponent} from './developer-blog.component';
import {GraphqlComponent} from './post/graphql.component';
<<<<<<< HEAD
import {MongodbComponent} from './post/mongodb.component';

@NgModule({
    imports: [SharedModule, DeveloperBlogRoutingModule],
    exports: [DeveloperBlogComponent, GraphqlComponent, MongodbComponent],
=======
import {RsaHsaComponent} from './post/rsa-hsa.component';
import {ReactiveSpringComponent} from './post/reactive-spring.component';
import {MongodbComponent} from './post/mongodb.component';
import {SpringBootWebAppComponent} from './post/spring-boot-web-app.component';

@NgModule({
    imports: [SharedModule, DeveloperBlogRoutingModule],
    exports: [DeveloperBlogComponent, GraphqlComponent, RsaHsaComponent, ReactiveSpringComponent, MongodbComponent,
        SpringBootWebAppComponent],
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
    declarations: [DeveloperBlogRoutingModule.components],
    providers: [{provide: 'DEV_ROUTES', useValue: DEV_BLOG_ROUTES}]
})
export class DeveloperBlogModule {
}
