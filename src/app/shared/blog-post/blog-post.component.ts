'use strict';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'cm-blog-post',
    templateUrl: './blog-post.component.html'
})
export class BlogPostComponent {

    @Input() postTitle: string;
    @Input() postDate: Date;
    @Input() postAbstract: string;
    @Input() postImageName: string;

    constructor() {}

    postImagePresent(): boolean {
        return this.postImageName && this.postImageName !== '';
    }
}
