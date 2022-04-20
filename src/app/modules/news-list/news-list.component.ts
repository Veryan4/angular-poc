import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/models/news';

@Component({
  selector: 'news-list',
  templateUrl: 'news-list.component.html',
  styleUrls: ['news-list.component.css'],
})
export class NewsListComponent {
  newsStories: News[];

  constructor(private route: ActivatedRoute) {
    this.newsStories = this.route.snapshot.data['news'];
  }
}
