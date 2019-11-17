import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router';
import {BlogSidebarSearchComponent} from './blog-sidebar-search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [BlogSidebarSearchComponent],
  declarations: [BlogSidebarSearchComponent]
})
export class BlogSidebarSearchModule { }
