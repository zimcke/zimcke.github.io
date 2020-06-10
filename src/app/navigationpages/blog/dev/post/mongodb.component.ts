'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';
import {PostCategory} from '../../../../core/enum/postCategory';

@Component({
    selector: 'app-mongo-db',
    templateUrl: './mongodb.component.html'
})
export class MongodbComponent extends AbstractBlogPost {

    postTitle(): string {
<<<<<<< HEAD
        return "The effect of digital devices on language retention";
    }

    postDate(): Date {
        return new Date(2019,12,7);
    }

    postAbstract(): string {
        return "Research shows that the average number of Chinese characters a person knows decreases due to \
        the use of digital media. In short, the lack of opportunities to write characters nowadays, has a bad \
        effect on the retention of characters, even for native Chinese speakers. Personally, I also experience this \
        while studying Chinese. In this blog post I address the impact of this phenomena and try to think of ways to avoid this pitfall \
        for Chinese language learners.";
    }

    postCategories(): PostCategory[] {
        return [PostCategory.GraphQL];;
=======
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
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
    }

}
