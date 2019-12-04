'use strict';
import {Injectable} from '@angular/core';
import {DEV_BLOG_ROUTES} from '../../navigationpages/blog/dev/developer-blog-routing.module';
import {GAME_BLOG_ROUTES} from '../../navigationpages/blog/gaming/gaming-blog-routing.module';
import {IBlogPost, RoutesWithPathPrefix} from '../../shared/interfaces';
import {BlogPostUtils} from '../util/blogPostUtils';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class BlogRoutingService {

    public getAllBlogPosts(): IBlogPost[] {
        return;
        // return this.getAllRoutes()
        //     .map((routes: RoutesWithPathPrefix) => BlogPostUtils.getBlogPostsFromRoutes(routes))
        //     .reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
    }

    public getAllRoutes(): RoutesWithPathPrefix[] {
        return [
            DEV_BLOG_ROUTES,
            GAME_BLOG_ROUTES
        ];
    }
}
