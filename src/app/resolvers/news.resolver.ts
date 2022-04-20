import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Injectable({
  providedIn: 'root',
})
export class NewsResolver implements Resolve<Observable<News[]>> {
  constructor(private newsService: NewsService) {}

  resolve(): Observable<News[]> {
    return this.newsService.getTopStories();
  }
}
