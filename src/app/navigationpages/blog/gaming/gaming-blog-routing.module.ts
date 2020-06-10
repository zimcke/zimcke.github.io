import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GamingBlogComponent} from './gaming-blog.component';
import {PlaceholderComponent} from './post/placeholder.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';

const ROUTES: Routes = [
<<<<<<< HEAD
    {path: '', component: GamingBlogComponent}
    //{path: 'placeholder', data: {breadcrumb: 'Placeholder'}, component: PlaceholderComponent}
=======
    {path: '', component: GamingBlogComponent},
    {path: 'placeholder', data: {breadcrumb: 'Placeholder'}, component: PlaceholderComponent}
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
];

export const GAME_BLOG_ROUTES: RoutesWithPathPrefix = {
    routes: ROUTES,
    pathPrefix: '/blogs/game/'
}

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class GamingBlogRoutingModule {
    static components = [GamingBlogComponent, PlaceholderComponent];
}
