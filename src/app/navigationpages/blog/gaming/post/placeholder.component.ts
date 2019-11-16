'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-placeholder',
    templateUrl: './placeholder.component.html'
})
export class PlaceholderComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'Placeholder';
    }

    postDate(): Date {
        return undefined;
    }

    postAbstract(): string {
        return undefined;
    }

    postCategories(): PostCategory[] {
        return [];
    }
}
