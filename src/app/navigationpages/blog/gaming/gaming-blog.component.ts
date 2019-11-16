'use strict';
import {Component, Inject} from '@angular/core';
import {IBlogPost} from '../../../shared/interfaces';
import {Route, Routes} from '@angular/router';

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
        return this.gameRoutes
            .filter((route: Route) => route.path !== '')
            .map((route: Route) => {
                return {
                    path: route.path,
                    postTitle: route.component.prototype.postTitle(),
                    postDate: route.component.prototype.postDate(),
                    postAbstract: route.component.prototype.postAbstract(),
                    postImageName: route.component.prototype.postImageName()
                } as IBlogPost;
            });
    }
}
