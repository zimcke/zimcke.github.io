import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BlogSidebarComponent} from './blog-sidebar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [BlogSidebarComponent],
  declarations: [BlogSidebarComponent]
})
export class BlogSidebarModule { }
