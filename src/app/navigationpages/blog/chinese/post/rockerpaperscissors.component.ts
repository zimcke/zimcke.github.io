'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-exampreparations',
    templateUrl: './rockpaperscissors.component.html'
})
export class RockerPaperScissorsComponent extends AbstractBlogPost {

    postTitle(): string {
        return 'Rock paper scissors';
    }

    postDate(): Date {
        return new Date(2020, 4, 15);
    }

    postAbstract(): string {
        return "About cultural differences.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.Chinese, PostCategory.Culture];
    }
}
