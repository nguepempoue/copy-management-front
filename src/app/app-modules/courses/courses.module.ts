import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './course/course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewMoreCourseComponent } from './view-more-course/view-more-course.component';


@NgModule({
  declarations: [
    CourseComponent,
    ViewMoreCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CoursesModule { }
