'use strict';
import {IBlogPost} from '../../shared/interfaces';

export class BlogPostUtils {

    static compareBlogPostsByDate(blogPost1: IBlogPost, blogPost2: IBlogPost): number {
        if (blogPost1.postDate == null) {
            return 1;
        }
        if (blogPost2.postDate == null) {
            return -1;
        }
        return blogPost2.postDate.getTime() - blogPost1.postDate.getTime();
    }
}
