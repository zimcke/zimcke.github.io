import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import {BlogSidebarCategoryComponent} from './blog-sidebar-category.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [BlogSidebarCategoryComponent],
  declarations: [BlogSidebarCategoryComponent]
})
export class BlogSidebarCategoryModule { }
