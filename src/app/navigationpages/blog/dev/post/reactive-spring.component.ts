'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-reactive-spring',
    templateUrl: './reactive-spring.component.html'
})
export class ReactiveSpringComponent extends AbstractBlogPost {

    postTitle(): string {
        return undefined;
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
