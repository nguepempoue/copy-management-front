import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreCourseComponent } from './view-more-course.component';

describe('ViewMoreCourseComponent', () => {
  let component: ViewMoreCourseComponent;
  let fixture: ComponentFixture<ViewMoreCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMoreCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMoreCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
