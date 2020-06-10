import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const BLOG_ROUTES: Routes = [
    {
<<<<<<< HEAD
        path: 'dev', data: {breadcrumb: 'Blog'},
=======
        path: 'dev', data: {breadcrumb: 'Developer Blog'},
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
        loadChildren: () => import('./dev/developer-blog.module').then(m => m.DeveloperBlogModule)
    },
    {
        path: 'game', data: {breadcrumb: 'Gaming Blog'},
        loadChildren: () => import('./gaming/gaming-blog.module').then(m => m.GamingBlogModule)
    },
<<<<<<< HEAD
    {
        path: 'chinese', data: {breadcrum: 'Chinese Blog'},
        loadChildren: () => import('./chinese/chinese-blog.module').then(m => m.ChineseBlogModule)
    },
    {path: '**', redirectTo: 'chinese'} // catch any unfound routes and redirect to dev blog page
=======
    {path: '**', redirectTo: 'dev'} // catch any unfound routes and redirect to dev blog page
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
];

@NgModule({
    imports: [RouterModule.forChild(BLOG_ROUTES)],
    exports: [RouterModule]
})
export class BlogRoutingModule {
    static components = [];
}
