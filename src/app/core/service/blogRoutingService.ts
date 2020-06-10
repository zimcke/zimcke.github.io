'use strict';
import {Injectable} from '@angular/core';
import {DEV_BLOG_ROUTES} from '../../navigationpages/blog/dev/developer-blog-routing.module';
import {GAME_BLOG_ROUTES} from '../../navigationpages/blog/gaming/gaming-blog-routing.module';
import {IBlogPost, RoutesWithPathPrefix} from '../../shared/interfaces';
import {BlogPostUtils} from '../util/blogPostUtils';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
<<<<<<< HEAD
import { CHINESE_BLOG_ROUTES } from 'src/app/navigationpages/blog/chinese/chinese-blog-routing.module';
=======
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f

@Injectable()
export class BlogRoutingService {

    public getAllBlogPosts(): IBlogPost[] {
<<<<<<< HEAD
        return this.getAllRoutes()
            .map((routes: RoutesWithPathPrefix) => BlogPostUtils.getBlogPostsFromRoutes(routes))
            .reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
=======
        return;
        // return this.getAllRoutes()
        //     .map((routes: RoutesWithPathPrefix) => BlogPostUtils.getBlogPostsFromRoutes(routes))
        //     .reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
    }

    public getAllRoutes(): RoutesWithPathPrefix[] {
        return [
            DEV_BLOG_ROUTES,
<<<<<<< HEAD
            GAME_BLOG_ROUTES,
            CHINESE_BLOG_ROUTES
=======
            GAME_BLOG_ROUTES
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
        ];
    }
}
