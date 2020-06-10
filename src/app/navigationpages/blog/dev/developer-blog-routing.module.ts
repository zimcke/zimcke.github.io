import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DeveloperBlogComponent} from './developer-blog.component';
import {GraphqlComponent} from './post/graphql.component';
<<<<<<< HEAD
import {MongodbComponent} from './post/mongodb.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';

const ROUTES: Routes = [
    {path: '', component: DeveloperBlogComponent}
    //{path: 'graphql', data: {breadcrumb: 'Books 2020'}, component: GraphqlComponent},
    // {path: 'reactive-spring', data: {breadcrumb: 'Reactive Spring'}, component: ReactiveSpringComponent},
    //{path: 'mongodb', data: {breadcrumb: 'Language retention'}, component: MongodbComponent}
=======
import {RsaHsaComponent} from './post/rsa-hsa.component';
import {ReactiveSpringComponent} from './post/reactive-spring.component';
import {MongodbComponent} from './post/mongodb.component';
import {SpringBootWebAppComponent} from './post/spring-boot-web-app.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';

const ROUTES: Routes = [
    {path: '', component: DeveloperBlogComponent},
    {path: 'graphql', data: {breadcrumb: 'GraphQL'}, component: GraphqlComponent},
    {path: 'rsa-hsa', data: {breadcrumb: 'RSA vs HSA'}, component: RsaHsaComponent},
    // {path: 'reactive-spring', data: {breadcrumb: 'Reactive Spring'}, component: ReactiveSpringComponent},
    // {path: 'mongodb', data: {breadcrumb: 'MongoDB'}, component: MongodbComponent},
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
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
