'use strict';
import {Component, Inject, Input} from '@angular/core';
import {DOCUMENT} from '@angular/common';

const mailtoLink = require('mailto-link');

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html'
})
export class BlogPostComponent {

    @Input() postTitle: string;
    @Input() postDate: Date;
    @Input() postAbstract: string;
    @Input() postImageName: string;

    mailBody: string;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    postImagePresent(): boolean {
        return this.postImageName && this.postImageName !== '';
    }

    mailSubject(): string {
        return 'Comment - ' + this.postTitle;
    }

    onSubmit(): void {
        this.document.location.href = mailtoLink({
<<<<<<< HEAD
            to: 'zimcke@gmail.com',
=======
            to: 'alexanderghtang@gmail.com',
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
            subject: this.mailSubject(),
            body: this.mailBody
        });
    }
}
