'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-exampreparations',
    templateUrl: './history_of_cantopop.component.html'
})
export class HistoryOfCantopopComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'History of Cantopop';
    }

    postDate(): Date {
        return new Date(2020, 5, 10);
    }

    postAbstract(): string {
        return "A short introduction to Cantopop and an overview of songs that played an important role in its history.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.Chinese];
    }
}
