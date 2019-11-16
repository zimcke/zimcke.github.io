'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';

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

}
