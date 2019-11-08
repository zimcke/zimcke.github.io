import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const app_routes: Routes = [
    { path: '', data: {breadcrumb: 'Home'}, loadChildren: () => import('./navigationpages/news/news.module').then(m => m.NewsModule) },
    { path: 'about', loadChildren: () => import('./navigationpages/about/about.module').then(m => m.AboutModule) },
    { path: 'blogs', data: {breadcrumb: {skip: true}}, loadChildren: () => import('./navigationpages/blog/blog.module').then(m => m.BlogModule) },
  { path: '**', redirectTo: '' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
