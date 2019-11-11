'use strict';
import {Component, Inject} from '@angular/core';
import {DOCUMENT} from '@angular/common';

const mailtoLink = require('mailto-link');

@Component({
    selector: 'cm-about',
    templateUrl: './about.component.html'
})
export class AboutComponent {

    constructor(@Inject(DOCUMENT) private document: Document) {}

    mailTo(): void {
        this.document.location.href = mailtoLink({
            to: 'alexanderghtang@gmail.com'
        });
    }
}
