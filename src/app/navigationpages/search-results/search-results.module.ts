import {NgModule} from '@angular/core';

import {SharedModule} from '../../shared/shared.module';
import {SearchResultsComponent} from './search-results.component';
import {SearchResultsRoutingModule} from './search-results-routing.module';

@NgModule({
    imports: [SharedModule, SearchResultsRoutingModule],
    exports: [SearchResultsComponent],
    declarations: [SearchResultsRoutingModule.components]
})
export class SearchResultsModule {
}
