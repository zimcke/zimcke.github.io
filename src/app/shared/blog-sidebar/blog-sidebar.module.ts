import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BlogSidebarComponent} from './blog-sidebar.component';

@NgModule({
  imports: [CommonModule],
  exports: [BlogSidebarComponent],
  declarations: [BlogSidebarComponent]
})
export class BlogSidebarModule { }
