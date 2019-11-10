'use strict';
import {Component, Input} from '@angular/core';
import {IBlogPost} from '../interfaces';

@Component({
    selector: 'cm-blog-overview',
    templateUrl: './blog-overview.component.html'
})
export class BlogOverviewComponent {

    @Input() blogTitle: string;
    @Input() blogPosts: IBlogPost[];

    constructor() {}

    postImagePresent(blogPost: IBlogPost): boolean {
        return blogPost.postImageName && blogPost.postImageName !== '';
    }
}
