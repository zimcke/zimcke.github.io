import {PostCategory} from '../core/enum/postCategory';

export interface IBlogPost {
    path: string;
    postTitle: string;
    postDate: Date;
    postAbstract: string;
    postCategories: PostCategory[];
    postImageName: string;
}
