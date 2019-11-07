import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DeveloperBlogModule} from "./dev/developer-blog.module";
import {GamingBlogModule} from "./gaming/gaming-blog.module";

const routes: Routes = [
    {path: 'dev', data: {breadcrumb: 'Dev Blog'}, loadChildren: () => DeveloperBlogModule},
    {path: 'game', data: {breadcrumb: 'Game Blog'}, loadChildren: () => GamingBlogModule},
    {path: '**', redirectTo: 'dev'} // catch any unfound routes and redirect to dev blog page
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {
    static components = [];
}
