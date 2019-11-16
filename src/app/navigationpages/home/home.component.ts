'use strict';
import {Component, Inject, OnInit} from '@angular/core';
import {IBlogPost} from '../../shared/interfaces';
import {Route, Routes} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    posts: IBlogPost[];

    constructor(@Inject('DEV_ROUTES') private devRoutes: Routes,
                @Inject('GAME_ROUTES') private gameRoutes: Routes) {
    }

    ngOnInit(): void {
        this.posts = this.getAllPosts();
    }

    private getAllPosts(): IBlogPost[] {
        const allRoutes: Routes = [
            ...this.devRoutes,
            ...this.gameRoutes
        ];
        return allRoutes
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
