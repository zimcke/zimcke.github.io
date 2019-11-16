import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-custom-breadcrumb',
    templateUrl: './custom-breadcrumb.component.html'
})
export class CustomBreadcrumbComponent {

    private blacklistedPaths: string[] = [''];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    hideBreadcrumb(): boolean {
        try {
            return this.blacklistedPaths
                .some((path: string) => path === this.activatedRoute.snapshot.firstChild.routeConfig.path);
        } catch (e) {
            return true;
        }
    }

}
