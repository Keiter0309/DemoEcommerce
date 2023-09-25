import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollFadeComponent } from './scroll-fade.component';

describe('ScrollFadeComponent', () => {
  let component: ScrollFadeComponent;
  let fixture: ComponentFixture<ScrollFadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollFadeComponent]
    });
    fixture = TestBed.createComponent(ScrollFadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
