'use strict';
import {Component, Inject, OnInit} from '@angular/core';
import {IBlogPost, RoutesWithPathPrefix} from '../../../shared/interfaces';
import {BlogPostUtils} from '../../../core/util/blogPostUtils';

@Component({
    selector: 'app-developer-blog',
    templateUrl: './developer-blog.component.html'
})
export class DeveloperBlogComponent implements OnInit {

<<<<<<< HEAD
    blogTitle = 'Blog';
=======
    blogTitle = 'Developer Blog';
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
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
