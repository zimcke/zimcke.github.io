'use strict';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'cm-blog-post',
    templateUrl: './blog-post.component.html'
})
export class BlogPostComponent {

    @Input() postTitle: string;
    @Input() postTimestamp: Date;
    @Input() postAbstract: string;
    @Input() postImage: string;

    constructor() {}
}
