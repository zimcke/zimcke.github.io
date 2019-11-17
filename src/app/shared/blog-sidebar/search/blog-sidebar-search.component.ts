'use strict';
import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-blog-sidebar-search',
    templateUrl: './blog-sidebar-search.component.html'
})
export class BlogSidebarSearchComponent {

    searchTerm: string;

    constructor(private router: Router) {
    }

    onSubmitSearch(): void {
        this.router.navigate(['/search-results'], {queryParams: {'search-term': this.searchTerm}});
    }
}
