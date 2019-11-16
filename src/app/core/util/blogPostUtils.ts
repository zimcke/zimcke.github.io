'use strict';
import {IBlogPost} from '../../shared/interfaces';
import {Route, Routes} from '@angular/router';

export class BlogPostUtils {

    public static compareBlogPostsByDate(blogPost1: IBlogPost, blogPost2: IBlogPost): number {
        if (blogPost1.postDate == null) {
            return 1;
        }
        if (blogPost2.postDate == null) {
            return -1;
        }
        return blogPost2.postDate.getTime() - blogPost1.postDate.getTime();
    }

    public static getBlogPostsFromRoutes(routes: Routes): IBlogPost[] {
        return routes
            .filter((route: Route) => route.path !== '')
            .map((route: Route) => {
                return {
                    path: route.path,
                    postTitle: route.component.prototype.postTitle(),
                    postDate: route.component.prototype.postDate(),
                    postAbstract: route.component.prototype.postAbstract(),
                    postCategories: route.component.prototype.postCategories(),
                    postImageName: route.component.prototype.postImageName()
                } as IBlogPost;
            });
    }
}
