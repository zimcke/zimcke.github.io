import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: 'dev', data: {breadcrumb: 'Dev Blog'}, loadChildren: () => import('./dev/developer-blog.module').then(m => m.DeveloperBlogModule)},
    {path: 'game', data: {breadcrumb: 'Game Blog'}, loadChildren: () => import('./gaming/gaming-blog.module').then(m => m.GamingBlogModule)},
    {path: '**', redirectTo: 'dev'} // catch any unfound routes and redirect to dev blog page
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlogRoutingModule {
    static components = [];
}
