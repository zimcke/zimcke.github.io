'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-spring-boot-web-app',
    templateUrl: './spring-boot-web-app.component.html'
})
export class SpringBootWebAppComponent extends AbstractBlogPost {

    postTitle(): string {
        return undefined;
    }

    postDate(): Date {
        return undefined;
    }

    postAbstract(): string {
        return undefined;
    }

    postCategories(): PostCategory[] {
        return [];
    }
}
