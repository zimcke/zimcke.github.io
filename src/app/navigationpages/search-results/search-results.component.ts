'use strict';
import {Component, OnInit} from '@angular/core';
import {IBlogPost} from '../../shared/interfaces';
import {BlogPostUtils} from '../../core/util/blogPostUtils';
import {BlogRoutingService} from '../../core/service/blogRoutingService';
import {ActivatedRoute} from '@angular/router';
import {PostCategory} from '../../core/enum/postCategory';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {

    title: string = 'Search results';
    posts: IBlogPost[];

    constructor(private activatedRoute: ActivatedRoute,
                private blogRoutingService: BlogRoutingService) {
    }

    ngOnInit(): void {
        this.posts = this.getMatchingPosts();
    }

    private getMatchingPosts(): IBlogPost[] {
        let blogPostsFromRoutes = BlogPostUtils.getBlogPostsFromRoutes(this.blogRoutingService.getAllRoutes());
        let category: PostCategory = +this.activatedRoute.snapshot.queryParamMap.get('category');
        if (category != null) {
            blogPostsFromRoutes = this.filterByQueryParameterCategory(blogPostsFromRoutes);
        }
        return blogPostsFromRoutes;
    }

    private filterByQueryParameterCategory(blogPosts: IBlogPost[]): IBlogPost[] {
        let category: PostCategory = +this.activatedRoute.snapshot.queryParamMap.get('category');
        if (category == null) {
            return blogPosts;
        }
        return blogPosts
            .filter((blogPost: IBlogPost) => blogPost.postCategories
                .some((postCategory: PostCategory) => postCategory === category));
    }
}
