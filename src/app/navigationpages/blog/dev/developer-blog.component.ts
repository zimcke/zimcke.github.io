'use strict';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'cm-developer-blog',
    templateUrl: './developer-blog.component.html'
})
export class DeveloperBlogComponent {

    constructor(private router: Router) {}
}
