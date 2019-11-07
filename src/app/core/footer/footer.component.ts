'use strict';
import {Component} from '@angular/core';

@Component({
    selector: 'cm-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    private getCurrentYear(): number {
        return (new Date()).getFullYear();
    }

}
