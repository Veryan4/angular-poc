import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoryComponent } from '../components/story/story.component';
import { SanitizeHtmlPipe } from '../pipes/sanitize.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [StoryComponent, SanitizeHtmlPipe],
  declarations: [StoryComponent, SanitizeHtmlPipe],
  providers: [],
})
export class SharedModule {}
