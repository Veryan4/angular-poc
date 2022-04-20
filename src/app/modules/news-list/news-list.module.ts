import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { NewsListComponent } from './news-list.component';
import { NewsListRoutingModule } from './news-list.routing.module';

@NgModule({
  imports: [CommonModule, NewsListRoutingModule, SharedModule],
  exports: [],
  declarations: [NewsListComponent],
  providers: [],
})
export class NewsListModule {}
