import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: '', data: {breadcrumb: 'Home'},
        loadChildren: () => import('./navigationpages/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'about',
        loadChildren: () => import('./navigationpages/about/about.module').then(m => m.AboutModule)
    },
    {
        path: 'bio',
        loadChildren: () => import('./navigationpages/bio/bio.module').then(m => m.BioModule)
    },
    {
        path: 'blogs', data: {breadcrumb: {skip: true}},
        loadChildren: () => import('./navigationpages/blog/blog.module').then(m => m.BlogModule)
    },
    {
        path: 'search-results',
        loadChildren: () => import('./navigationpages/search-results/search-results.module').then(m => m.SearchResultsModule)
    },
    {path: '**', redirectTo: ''} // catch any unfound routes and redirect to home page
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
