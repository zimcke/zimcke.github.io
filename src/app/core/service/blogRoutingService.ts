'use strict';
import {Injectable} from '@angular/core';
import {Routes} from '@angular/router';
import {DEV_BLOG_ROUTES} from '../../navigationpages/blog/dev/developer-blog-routing.module';
import {GAME_BLOG_ROUTES} from '../../navigationpages/blog/gaming/gaming-blog-routing.module';

@Injectable()
export class BlogRoutingService {

    public getAllRoutes(): Routes {
        return [
            ...DEV_BLOG_ROUTES,
            ...GAME_BLOG_ROUTES
        ];
    }
}
