import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DeveloperBlogComponent} from './developer-blog.component';
import {GraphqlComponent} from './post/graphql.component';
import {RsaHsaComponent} from './post/rsa-hsa.component';
import {ReactiveSpringComponent} from './post/reactive-spring.component';
import {MongodbComponent} from './post/mongodb.component';
import {SpringBootWebAppComponent} from './post/spring-boot-web-app.component';

export const routes: Routes = [
    {path: '', component: DeveloperBlogComponent},
    {path: 'graphql', data: {breadcrumb: 'GraphQL'}, component: GraphqlComponent},
    {path: 'rsa-hsa', data: {breadcrumb: 'RSA vs HSA'}, component: RsaHsaComponent},
    {path: 'reactive-spring', data: {breadcrumb: 'Reactive Spring'}, component: ReactiveSpringComponent},
    {path: 'mongodb', data: {breadcrumb: 'MongoDB'}, component: MongodbComponent},
    {path: 'spring-boot-web-app', data: {breadcrumb: 'Spring Boot Web App'}, component: SpringBootWebAppComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeveloperBlogRoutingModule {
    static components = [DeveloperBlogComponent, GraphqlComponent, RsaHsaComponent, ReactiveSpringComponent,
        MongodbComponent, SpringBootWebAppComponent];
}
