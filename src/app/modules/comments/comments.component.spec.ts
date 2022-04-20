import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import mockComment from 'src/app/mocks/mockComment';
import mockNews from 'src/app/mocks/mockNews';
import { SharedModule } from '../shared.module';
import { CommentsComponent } from './comments.component';

describe('CommentsComponent', () => {
  const route = {
    snapshot: { data: { storyWithComments: { story: mockNews(), comments: [mockComment(), mockComment()] } } },
  } as any as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [CommentsComponent],
      providers: [{ provide: ActivatedRoute, useValue: route }],
    }).compileComponents();
  });

  it('should create the Component', () => {
    const fixture = TestBed.createComponent(CommentsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render the Comment List', () => {
    const fixture = TestBed.createComponent(CommentsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-story')).toBeDefined();
    expect(compiled.querySelectorAll('.comment').length).toBe(2);
  });
});
