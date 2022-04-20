import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentsResolver } from './comments.resolver';
import mockComment from '../mocks/mockComment';
import mockNews from '../mocks/mockNews';
import { NewsService } from '../services/news.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';

describe('CommentsResolver', () => {
  let resolver: CommentsResolver;
  let service: NewsService;
  let httpController: HttpTestingController;
  let route: ActivatedRouteSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    resolver = TestBed.inject(CommentsResolver);
    service = TestBed.inject(NewsService);
    route = new ActivatedRouteSnapshot();
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should resolve the Story and its Comments', () => {
    const news = mockNews();
    const comment = mockComment();
    spyOn(service, 'getNewsStory').and.returnValue(of(mockNews()));
    spyOn(service, 'getComment').and.returnValues(of(mockComment()), of(mockComment()), of(mockComment()));

    route.params = { storyId: 1 };
    resolver.resolve(route).subscribe((resolved) => {
      expect(resolved).toEqual({ story: news, comments: [comment, comment, comment] });
    });
  });
});
