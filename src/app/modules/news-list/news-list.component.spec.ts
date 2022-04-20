import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import mockNews from 'src/app/mocks/mockNews';
import { NewsListComponent } from './news-list.component';

describe('NewsListComponent', () => {
  const route = { snapshot: { data: { news: [mockNews(), mockNews()] } } } as any as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [NewsListComponent],
      providers: [{ provide: ActivatedRoute, useValue: route }],
    }).compileComponents();
  });

  it('should create the News List', () => {
    const fixture = TestBed.createComponent(NewsListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the News List', () => {
    const fixture = TestBed.createComponent(NewsListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.item').length).toBe(2);
  });
});
