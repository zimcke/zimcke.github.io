import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BlogPostComponent} from './blog-post.component';
import {BlogSidebarModule} from '../blog-sidebar/blog-sidebar.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, BlogSidebarModule, RouterModule, FormsModule],
  exports: [BlogPostComponent],
  declarations: [BlogPostComponent]
})
export class BlogPostModule { }
