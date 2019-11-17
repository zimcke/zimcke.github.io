'use strict';
import {Component, Inject, OnInit} from '@angular/core';
import {IBlogPost, RoutesWithPathPrefix} from '../../../shared/interfaces';
import {BlogPostUtils} from '../../../core/util/blogPostUtils';

@Component({
    selector: 'app-developer-blog',
    templateUrl: './developer-blog.component.html'
})
export class DeveloperBlogComponent implements OnInit {

    blogTitle = 'Developer Blog';
    posts: IBlogPost[];

    constructor(@Inject('DEV_ROUTES') private devRoutes: RoutesWithPathPrefix) {
    }

    ngOnInit(): void {
        this.posts = this.getDeveloperPosts();
    }

    private getDeveloperPosts(): IBlogPost[] {
        return BlogPostUtils.getBlogPostsFromRoutes(this.devRoutes);
    }
}
