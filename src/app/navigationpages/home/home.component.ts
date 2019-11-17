'use strict';
import {Component, OnInit} from '@angular/core';
import {IBlogPost} from '../../shared/interfaces';
import {BlogRoutingService} from '../../core/service/blogRoutingService';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    posts: IBlogPost[];

    constructor(private blogRoutingService: BlogRoutingService) {
    }

    ngOnInit(): void {
        this.posts = this.getAllPosts();
    }

    private getAllPosts(): IBlogPost[] {
        return this.blogRoutingService.getAllBlogPosts();
    }
}
