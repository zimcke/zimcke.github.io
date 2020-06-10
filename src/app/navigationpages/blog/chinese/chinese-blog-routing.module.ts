import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChineseBlogComponent} from './chinese-blog.component';
import {WojiaComponent} from './post/wojia.component';
import {Books2020Component} from './post/books2020.component';
import {ExampreparationsComponent} from './post/exampreparations.component';
import {EducationVocabularyComponent} from './post/education_vocabulary.component';
import {HistoryOfCantopopComponent} from './post/history_of_cantopop.component';
import {RoutesWithPathPrefix} from '../../../shared/interfaces';

const ROUTES: Routes = [
    {path: '', component: ChineseBlogComponent},
    {path: 'wojia', data: {breadcrumb: 'Chinese homework: my home / 我家'}, component: WojiaComponent},
    {path: 'book2020', data: {breadcrumb: 'Books for 2020'}, component: Books2020Component},
    {path: 'exampreparations', data: {breadcrumb: 'Exam preparations'}, component: ExampreparationsComponent},
    {path: 'education_vocabulary', data: {breadcrumb: 'Education vocabulary'}, component: EducationVocabularyComponent},
    {path: 'history_of_cantopop', data: {breadcrumb: 'History Of Cantopop'}, component: HistoryOfCantopopComponent}
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
    static components = [
        ChineseBlogComponent, 
        WojiaComponent, 
        Books2020Component, 
        ExampreparationsComponent, 
        EducationVocabularyComponent, 
        HistoryOfCantopopComponent];
}
