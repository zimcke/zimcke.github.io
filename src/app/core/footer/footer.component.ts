'use strict';
import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

const mailtoLink = require('mailto-link');

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    getCurrentYear(): number {
        return (new Date()).getFullYear();
    }

    constructor(@Inject(DOCUMENT) private document: Document) {}

    mailTo(): void {
        this.document.location.href = mailtoLink({
            to: 'zimcke@gmail.com'
        });
    }

}
