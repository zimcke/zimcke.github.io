'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-exampreparations',
    templateUrl: './exampreparations.component.html'
})
export class ExampreparationsComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'Exam preparations';
    }

    postDate(): Date {
        return new Date(2020, 0, 4);
    }

    postAbstract(): string {
        return "For oral exam on Janary 16th.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.Chinese];
    }
}