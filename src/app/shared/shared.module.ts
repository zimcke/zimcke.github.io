import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CapitalizePipe} from './pipes/capitalize.pipe';
import {TrimPipe} from './pipes/trim.pipe';
import {BlogOverviewModule} from './blog-overview/blog-overview.module';
import {BlogPostModule} from './blog-post/blog-post.module';
import {BlogSidebarModule} from './blog-sidebar/blog-sidebar.module';

@NgModule({
    imports: [CommonModule, BlogOverviewModule, BlogPostModule, BlogSidebarModule],
    exports: [CommonModule, FormsModule, CapitalizePipe, TrimPipe, BlogSidebarModule, BlogOverviewModule, BlogPostModule],
    declarations: [CapitalizePipe, TrimPipe]
})
export class SharedModule {
}
