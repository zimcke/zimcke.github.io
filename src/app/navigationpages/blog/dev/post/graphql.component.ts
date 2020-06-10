'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-graph-ql',
    templateUrl: './graphql.component.html'
})
export class GraphqlComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'My books for 2020';
    }

    postDate(): Date {
        return new Date(2019, 12, 10);
    }

    postAbstract(): string {
        return undefined;
    }

    postCategories(): PostCategory[] {
        return [PostCategory.GraphQL];
    }
}
