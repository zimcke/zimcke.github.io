import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamingBlogComponent} from './gaming-blog.component';

const GAME_BLOG_ROUTES: Routes = [
    {path: '', component: GamingBlogComponent}
];

@NgModule({
    imports: [RouterModule.forChild(GAME_BLOG_ROUTES)],
    exports: [RouterModule]
})
export class GamingBlogRoutingModule {
    static components = [GamingBlogComponent];
}
