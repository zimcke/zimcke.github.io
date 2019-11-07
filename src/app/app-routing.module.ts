import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import {NewsModule} from './navigationpages/news/news.module';
import {BlogModule} from './navigationpages/blog/blog.module';
import {AboutModule} from "./navigationpages/about/about.module";

const app_routes: Routes = [
    { path: '', data: {breadcrumb: 'Home'}, loadChildren: () => NewsModule },
    { path: 'about', loadChildren: () => AboutModule },
    { path: 'blogs', data: {breadcrumb: {skip: true}}, loadChildren: () => BlogModule },
  { path: '**', redirectTo: '' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
