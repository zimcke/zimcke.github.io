import {NgModule} from '@angular/core';

import {NewsComponent} from './news.component';
import {SharedModule} from '../../shared/shared.module';
import {NewsRoutingModule} from './news-routing.module';

@NgModule({
    imports: [SharedModule, NewsRoutingModule],
    exports: [NewsComponent],
    declarations: [NewsRoutingModule.components]
})
export class NewsModule {
}
