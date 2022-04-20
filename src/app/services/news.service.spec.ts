import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NewsService } from './news.service';
import mockComment from '../mocks/mockComment';
import mockNews from '../mocks/mockNews';

describe('NewsService', () => {
  let service: NewsService;
  let httpController: HttpTestingController;

  const url = 'https://hacker-news.firebaseio.com/v0/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NewsService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should call NewsStory and return a News', () => {
    const news = mockNews();
    service.getNewsStory(news.id).subscribe((res) => {
      expect(res).toEqual(news);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}item/${news.id}.json`,
    });

    req.flush(news);
  });

  it('should call getTopStories and return an Array of News Stories', () => {
    const news = mockNews();
    service.getTopStories().subscribe((res) => {
      expect(res).toEqual([news]);
    });

    const req1 = httpController.expectOne({
      method: 'GET',
      url: `${url}topstories.json`,
    });

    req1.flush([news.id]);

    const req2 = httpController.expectOne({
      method: 'GET',
      url: `${url}item/${news.id}.json`,
    });
    req2.flush(news);
  });

  it('should call getComment and return a Comment', () => {
    const comment = mockComment();
    service.getComment(comment.id).subscribe((res) => {
      expect(res).toEqual(comment);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}item/${comment.id}.json`,
    });

    req.flush(comment);
  });
});
