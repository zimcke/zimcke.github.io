import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BlogOverviewComponent} from './blog-overview.component';
import {BlogSidebarModule} from "../blog-sidebar/blog-sidebar.module";
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, BlogSidebarModule, RouterModule],
  exports: [BlogOverviewComponent],
  declarations: [BlogOverviewComponent]
})
export class BlogOverviewModule { }
