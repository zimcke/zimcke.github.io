import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DeveloperBlogComponent} from './developer-blog.component';
import {GraphqlComponent} from './post/graphql.component';
import {MongodbComponent} from './post/mongodb.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';

const ROUTES: Routes = [
    {path: '', component: DeveloperBlogComponent}
    //{path: 'graphql', data: {breadcrumb: 'Books 2020'}, component: GraphqlComponent},
    // {path: 'reactive-spring', data: {breadcrumb: 'Reactive Spring'}, component: ReactiveSpringComponent},
    //{path: 'mongodb', data: {breadcrumb: 'Language retention'}, component: MongodbComponent}
    // {path: 'spring-boot-web-app', data: {breadcrumb: 'Spring Boot Web App'}, component: SpringBootWebAppComponent}
];

export const DEV_BLOG_ROUTES: RoutesWithPathPrefix = {
    routes: ROUTES,
    pathPrefix: '/blogs/dev/'
};

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class DeveloperBlogRoutingModule {
    static components = [DeveloperBlogComponent, GraphqlComponent,
        MongodbComponent];
}
