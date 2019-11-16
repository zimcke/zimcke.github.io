'use strict';
import {Component, OnInit} from '@angular/core';
import {BlogRoutingService} from '../../core/service/blogRoutingService';
import {BlogPostUtils} from '../../core/util/blogPostUtils';
import {IBlogPost} from '../interfaces';
import {PostCategory} from '../../core/enum/postCategory';

@Component({
    selector: 'app-blog-sidebar',
    templateUrl: './blog-sidebar.component.html'
})
export class BlogSidebarComponent implements OnInit {

    private categoryFrequencyMap: Map<PostCategory, number> = new Map();

    constructor(private blogRoutingService: BlogRoutingService) {
    }

    ngOnInit(): void {
        this.initCategoryFrequencyMap();
    }

    getTop6Categories(): Map<PostCategory, number> {
        return new Map([...this.categoryFrequencyMap]
            .sort((categoryEntry1, categoryEntry2) => {
                return categoryEntry2[1] - categoryEntry1[1]; // sort by category frequency in DESC order
            })
            .slice(0, 6));
    }

    getEnumString(number: number): string {
        return PostCategory[number];
    }

    searchCategory(category: PostCategory): void {

    }

    private initCategoryFrequencyMap(): void {
        BlogPostUtils.getBlogPostsFromRoutes(this.blogRoutingService.getAllRoutes())
            .map((blogPost: IBlogPost) => blogPost.postCategories)
            .reduce((previousValue, currentValue) => previousValue.concat(currentValue), []) // replacement for flatMap..
            .forEach((postCategory: PostCategory) => {
                if (this.categoryFrequencyMap.has(postCategory)) {
                    this.categoryFrequencyMap.set(postCategory, this.categoryFrequencyMap.get(postCategory) + 1);
                } else {
                    this.categoryFrequencyMap.set(postCategory, 1);
                }
            });
    }
}
