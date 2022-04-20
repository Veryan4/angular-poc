import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import mockNews from '../mocks/mockNews';
import { NewsService } from '../services/news.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { NewsResolver } from './news.resolver';

describe('NewsResolver', () => {
  let resolver: NewsResolver;
  let service: NewsService;
  let httpController: HttpTestingController;
  let route: ActivatedRouteSnapshot;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    resolver = TestBed.inject(NewsResolver);
    service = TestBed.inject(NewsService);
    route = new ActivatedRouteSnapshot();
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should resolve the top stories', () => {
    const news = mockNews();
    spyOn(service, 'getTopStories').and.returnValue(of([news]));

    resolver.resolve().subscribe((resolved) => {
      expect(resolved).toEqual([news]);
    });
  });
});
