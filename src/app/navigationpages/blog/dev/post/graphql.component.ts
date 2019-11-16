'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';

@Component({
    selector: 'app-graph-ql',
    templateUrl: './graphql.component.html'
})
export class GraphqlComponent extends AbstractBlogPost {
    postTitle(): string {
        return 'GraphQL with Spring Boot + MongoDB';
    }

    postDate(): Date {
        return new Date(2019, 11, 10);
    }

    postAbstract(): string {
        return undefined;
    }
}
