import { Component, Input } from '@angular/core';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-story',
  templateUrl: 'story.component.html',
  styleUrls: ['story.component.css'],
})
export class StoryComponent {
  @Input() story: News;
  @Input() rank?: number;

  constructor() {}

  onOpenLink(url: string) {
    if (url) {
      window.open(url);
    }
  }
}
