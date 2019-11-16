'use strict';
import {Component} from '@angular/core';
import {AbstractBlogPost} from '../../../../core/model/AbstractBlogPost';

@Component({
    selector: 'app-rsa-hsa',
    templateUrl: './rsa-hsa.component.html'
})
export class RsaHsaComponent extends AbstractBlogPost{

    postTitle(): string {
        return 'Difference between RSA and HSA';
    }
    postDate(): Date {
        return new Date(2019, 11, 9);
    }

    postAbstract(): string {
        return "When sending messages over a network, it is common that the authenticity of these messages needs \
        to be validated. There are several methods available to ensure the content has not been tampered with. \
        This article discusses two such methods, RSA and HSA, and their relative advantages.";
    }
}
