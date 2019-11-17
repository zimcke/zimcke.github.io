import {PostCategory} from '../core/enum/postCategory';
import {Routes} from '@angular/router';

export interface IBlogPost {
    path: string;
    postTitle: string;
    postDate: Date;
    postAbstract: string;
    postCategories: PostCategory[];
    postImageName: string;
}

export interface RoutesWithPathPrefix {
    routes: Routes;
    pathPrefix: string;
}
