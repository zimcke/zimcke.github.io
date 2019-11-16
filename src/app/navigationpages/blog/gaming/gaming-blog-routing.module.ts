import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamingBlogComponent} from './gaming-blog.component';
import {PlaceholderComponent} from './post/placeholder.component';

export const GAME_BLOG_ROUTES: Routes = [
    {path: '', component: GamingBlogComponent},
    {path: 'placeholder', data: {breadcrumb: 'Placeholder'}, component: PlaceholderComponent}
];

@NgModule({
    imports: [RouterModule.forChild(GAME_BLOG_ROUTES)],
    exports: [RouterModule]
})
export class GamingBlogRoutingModule {
    static components = [GamingBlogComponent, PlaceholderComponent];
}
