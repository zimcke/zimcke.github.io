import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BlogSidebarComponent} from './blog-sidebar.component';
import {BlogSidebarCategoryModule} from './category/blog-sidebar-category.module';

@NgModule({
  imports: [CommonModule, BlogSidebarCategoryModule],
  exports: [BlogSidebarComponent],
  declarations: [BlogSidebarComponent]
})
export class BlogSidebarModule { }
