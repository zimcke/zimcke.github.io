'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-books2020',
    templateUrl: './books2020.component.html'
})
export class Books2020Component extends AbstractBlogPost {

    postTitle(): string {
        return 'Books for 2020';
    }

    postDate(): Date {
        return new Date(2020, 0, 1);
    }

    postAbstract(): string {
        return "One of my personal goals is to read more in 2020. Now that I'm commuting for work on a daily basis \
        I will be able to spend a good amount of time with a book in my hands. \
        Below is a shortlist of the books I definitely want to read before the end of 2020 and a short explanation why.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.Reading];
    }
}
