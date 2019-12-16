'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-wojia',
    templateUrl: './wojia.component.html'
})
export class WojiaComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'Chinese Homework: my home / 我家';
    }

    postDate(): Date {
        return new Date(2019, 11, 15);
    }

    postAbstract(): string {
        return "People regularly ask me what we do during Chinese class. I usually tell them our teacher prefers us \
        to read Chinese, write articles, make movies, etc. instead of practising grammar and vocabulary in \
        a closed-exercise setting.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.Chinese];
    }
}
