import {NgModule} from '@angular/core';

import {SharedModule} from '../../../shared/shared.module';
import {ChineseBlogRoutingModule, CHINESE_BLOG_ROUTES} from './chinese-blog-routing.module';
import {ChineseBlogComponent} from './chinese-blog.component';
import {WojiaComponent} from './post/wojia.component';
import {Books2020Component} from './post/books2020.component';
import { ExampreparationsComponent } from './post/exampreparations.component';
import {EducationVocabularyComponent} from './post/education_vocabulary.component'; 
import { NgPiaoLiangHanziModule } from 'ng-piao-liang-hanzi';

@NgModule({
    imports: [SharedModule, ChineseBlogRoutingModule,  NgPiaoLiangHanziModule],
    exports: [ChineseBlogComponent, WojiaComponent, Books2020Component, ExampreparationsComponent, EducationVocabularyComponent],
    declarations: [ChineseBlogRoutingModule.components],
    providers: [{provide: 'CHINESE_ROUTES', useValue: CHINESE_BLOG_ROUTES}, {provide: 'ENABLE_BOTTOM_PINYIN', useValue: true}]
})
export class ChineseBlogModule {
}
