'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-exampreparations',
    templateUrl: './education_vocabulary.component.html'
})
export class EducationVocabularyComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'List of education related terms in Chinese';
    }

    postDate(): Date {
        return new Date(2020, 4, 15);
    }

    postAbstract(): string {
        return "A list of very specific education-related terms that I use when reading Chinese articles on education.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.Chinese];
    }
}
