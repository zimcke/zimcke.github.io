'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';

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
}
