'use strict';
import {Component} from '@angular/core';

@Component({
    selector: 'cm-graph-ql',
    templateUrl: './graphql.component.html'
})
export class GraphqlComponent {
    postTitle = 'GraphQL with Spring Boot + MongoDB';
    postTimestamp = new Date(2019, 11, 6);

    constructor() {}
}
