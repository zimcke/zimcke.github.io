import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChineseBlogComponent} from './chinese-blog.component';
import {WojiaComponent} from './post/wojia.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';

const ROUTES: Routes = [
    {path: '', component: ChineseBlogComponent},
    {path: 'wojia', data: {breadcrumb: 'Chinese homework: my home / 我家'}, component: WojiaComponent}
];

export const CHINESE_BLOG_ROUTES: RoutesWithPathPrefix = {
    routes: ROUTES,
    pathPrefix: '/blogs/chinese/'
};

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class ChineseBlogRoutingModule {
    static components = [ChineseBlogComponent, WojiaComponent];
}
