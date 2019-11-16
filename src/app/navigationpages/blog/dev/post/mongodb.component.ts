'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-mongo-db',
    templateUrl: './mongodb.component.html'
})
export class MongodbComponent extends AbstractBlogPost {

    postTitle(): string {
        return undefined;
    }

    postDate(): Date {
        return undefined;
    }

    postAbstract(): string {
        return undefined;
    }

    postCategories(): PostCategory[] {
        return [];
    }

}
