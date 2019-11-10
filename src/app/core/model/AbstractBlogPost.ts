'use strict';

export abstract class AbstractBlogPost {

    constructor() {}

    abstract postTitle(): string;

    abstract postDate(): Date;

    abstract postAbstract(): string;

    postImageName(): string {
        return '';
    }
}
