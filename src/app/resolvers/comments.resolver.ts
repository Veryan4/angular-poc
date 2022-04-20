import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { forkJoin, map, Observable, switchMap } from 'rxjs';
import { StoryWithComments } from '../models/comment';
import { News } from '../models/news';
import { NewsService } from '../services/news.service';

@Injectable({
  providedIn: 'root',
})
export class CommentsResolver implements Resolve<Observable<StoryWithComments>> {
  private numberOfComments = 3;

  constructor(private newsService: NewsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<StoryWithComments> {
    let currentStory: News;
    return this.newsService.getNewsStory(Number(route.paramMap.get('storyId'))).pipe(
      switchMap((story) => {
        currentStory = story;
        const commentIds = story.kids.slice(0, Math.min(this.numberOfComments, story.kids.length));
        return forkJoin(commentIds.map((commentId) => this.newsService.getComment(commentId)));
      }),
      map((comments) => {
        return { story: currentStory, comments };
      })
    );
  }
}
