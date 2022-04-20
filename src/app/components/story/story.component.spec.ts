import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import mockNews from 'src/app/mocks/mockNews';
import { StoryComponent } from './story.component';

describe('StoryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [StoryComponent],
    }).compileComponents();
  });

  it('should create the Story', () => {
    const fixture = TestBed.createComponent(StoryComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render rank if present', () => {
    const fixture = TestBed.createComponent(StoryComponent);
    const component = fixture.componentInstance;
    component.story = mockNews();
    component.rank = mockNews().score;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.rank')).toBeDefined();
    expect(compiled.querySelector('.description')).toHaveClass('ranked');
  });

  it('should not render rank if absent', () => {
    const fixture = TestBed.createComponent(StoryComponent);
    const component = fixture.componentInstance;
    component.story = mockNews();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.rank')).toBeNull();
    expect(compiled.querySelector('.description')?.classList).toHaveSize(1);
  });

});
