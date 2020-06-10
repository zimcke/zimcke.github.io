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

<<<<<<< HEAD
    isHomeBreadcrumbItem(breadcrumbName: string): boolean {
        return breadcrumbName === 'Home';
    }

=======
>>>>>>> 0625518d1721656d8a5b62619edea3b19d60488f
    hideBreadcrumb(): boolean {
        try {
            return this.blacklistedPaths
                .some((path: string) => path === this.activatedRoute.snapshot.firstChild.routeConfig.path);
        } catch (e) {
            return true;
        }
    }

}
