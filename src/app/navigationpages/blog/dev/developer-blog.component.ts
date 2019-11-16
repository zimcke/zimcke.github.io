'use strict';
import {Component, Inject, OnInit} from '@angular/core';
import {Routes} from '@angular/router';
import {IBlogPost} from '../../../shared/interfaces';
import {BlogPostUtils} from '../../../core/util/blogPostUtils';

@Component({
    selector: 'app-developer-blog',
    templateUrl: './developer-blog.component.html'
})
export class DeveloperBlogComponent implements OnInit {

    blogTitle = 'Developer Blog';
    posts: IBlogPost[];

    constructor(@Inject('DEV_ROUTES') private devRoutes: Routes) {
    }

    ngOnInit(): void {
        this.posts = this.getDeveloperPosts();
    }

    private getDeveloperPosts(): IBlogPost[] {
        return BlogPostUtils.getBlogPostsFromRoutes(this.devRoutes);
    }
}
