'use strict';
import {PostCategory} from '../enum/postCategory';

export abstract class AbstractBlogPost {

    constructor() {}

    abstract postTitle(): string;

    abstract postDate(): Date;

    abstract postAbstract(): string;

    abstract postCategories(): PostCategory[];

    postImageName(): string {
        return '';
    }
}
