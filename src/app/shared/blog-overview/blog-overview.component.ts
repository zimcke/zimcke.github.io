'use strict';
import {Component, Input, OnInit} from '@angular/core';
import {IBlogPost} from '../interfaces';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'cm-blog-overview',
    templateUrl: './blog-overview.component.html'
})
export class BlogOverviewComponent implements OnInit {

    @Input() blogTitle: string;
    @Input() blogPosts: IBlogPost[] = [];

    currentPage: number;
    pageSize: number = 5;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.setCurrentPage();
    }

    postImagePresent(blogPost: IBlogPost): boolean {
        return blogPost.postImageName && blogPost.postImageName !== '';
    }

    private setCurrentPage(): void {
        this.currentPage = +this.activatedRoute.snapshot.queryParamMap.get('page');
        if (isNaN(this.currentPage) || this.currentPage < 1 ||
            (this.currentPage - 1) * this.pageSize + 1 > this.blogPosts.length) {
            this.currentPage = 1;
        }
    }
}
