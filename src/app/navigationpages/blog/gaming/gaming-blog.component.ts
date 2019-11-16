'use strict';
import {Component, Inject} from '@angular/core';
import {IBlogPost} from '../../../shared/interfaces';
import {Routes} from '@angular/router';
import {BlogPostUtils} from '../../../core/util/blogPostUtils';

@Component({
    selector: 'app-gaming-blog',
    templateUrl: './gaming-blog.component.html'
})
export class GamingBlogComponent {

    blogTitle = 'Gaming Blog';
    posts: IBlogPost[];

    constructor(@Inject('GAME_ROUTES') private gameRoutes: Routes) {
    }

    ngOnInit(): void {
        this.posts = this.getGamingPosts();
    }

    private getGamingPosts(): IBlogPost[] {
        return BlogPostUtils.getBlogPostsFromRoutes(this.gameRoutes);
    }
}
