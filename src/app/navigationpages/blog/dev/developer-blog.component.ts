'use strict';
import {Component, Inject, OnInit} from '@angular/core';
import {Route, Routes} from '@angular/router';
import {IBlogPost} from '../../../shared/interfaces';

@Component({
    selector: 'cm-developer-blog',
    templateUrl: './developer-blog.component.html'
})
export class DeveloperBlogComponent implements OnInit{

    blogTitle = 'Developer Blog';
    posts: IBlogPost[];

    constructor(@Inject('DEV_ROUTES') private devRoutes: Routes) {
    }

    ngOnInit(): void {
        this.posts = this.devRoutes
            .filter((route: Route) => route.path !== '')
            .map((route: Route) => {
                return <IBlogPost>{
                    path: route.path,
                    postTitle: route.component.prototype.postTitle(),
                    postDate: route.component.prototype.postDate(),
                    postAbstract: route.component.prototype.postAbstract(),
                    postImageName: route.component.prototype.postImageName()
                }
            })
    }
}
