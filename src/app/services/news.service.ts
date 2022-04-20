import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, switchMap, map } from 'rxjs';
import { News } from '../models/news';
import { Comment } from '../models/comment';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private baseUrl = 'https://hacker-news.firebaseio.com/v0/';
  private numberOfStories = 5;

  constructor(private httpClient: HttpClient) {}

  getNewsStory(storyId: number) {
    return this.httpClient.get<News>(`${this.baseUrl}item/${storyId}.json`).pipe(map((story) => new News(story)));
  }

  getTopStories() {
    return this.httpClient.get<number[]>(`${this.baseUrl}topstories.json`).pipe(
      switchMap((storyIds: number[]) => {
        storyIds = storyIds.slice(0, Math.min(this.numberOfStories, storyIds.length));
        return forkJoin(storyIds.map((storyId) => this.getNewsStory(storyId)));
      })
    );
  }

  getComment(commentId: number) {
    return this.httpClient
      .get<Comment>(`${this.baseUrl}item/${commentId}.json`)
      .pipe(map((comment) => new Comment(comment)));
  }
}
