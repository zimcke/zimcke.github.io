'use strict';
import {Component, Input} from '@angular/core';

@Component({
    selector: 'cm-blog-overview',
    templateUrl: './blog-overview.component.html'
})
export class BlogOverviewComponent {

    @Input() blogTitle: string;

    constructor() {}
}
