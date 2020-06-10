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
<<<<<<< HEAD
        return 'My books for 2020';
    }

    postDate(): Date {
        return new Date(2019, 12, 10);
=======
        return 'GraphQL with Spring Boot + MongoDB';
    }

    postDate(): Date {
        return new Date(2019, 11, 10);
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
    }

    postAbstract(): string {
        return undefined;
    }

    postCategories(): PostCategory[] {
        return [PostCategory.GraphQL];
    }
}
