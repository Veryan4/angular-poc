import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { CommentsComponent } from './comments.component';
import { CommentsRoutingModule } from './comments.routing.module';

@NgModule({
  imports: [CommonModule, CommentsRoutingModule, SharedModule],
  exports: [],
  declarations: [CommentsComponent],
  providers: [],
})
export class CommentsModule {}
