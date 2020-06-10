import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const BLOG_ROUTES: Routes = [
    {
        path: 'dev', data: {breadcrumb: 'Blog'},
        loadChildren: () => import('./dev/developer-blog.module').then(m => m.DeveloperBlogModule)
    },
    {
        path: 'game', data: {breadcrumb: 'Gaming Blog'},
        loadChildren: () => import('./gaming/gaming-blog.module').then(m => m.GamingBlogModule)
    },
    {
        path: 'chinese', data: {breadcrum: 'Chinese Blog'},
        loadChildren: () => import('./chinese/chinese-blog.module').then(m => m.ChineseBlogModule)
    },
    {path: '**', redirectTo: 'chinese'} // catch any unfound routes and redirect to dev blog page
];

@NgModule({
    imports: [RouterModule.forChild(BLOG_ROUTES)],
    exports: [RouterModule]
})
export class BlogRoutingModule {
    static components = [];
}
