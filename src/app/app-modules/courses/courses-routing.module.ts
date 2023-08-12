import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { EntityGuard } from 'src/app/core/service/entity.guard';

const routes: Routes = [
  {path:"", component: CourseComponent, canActivate: [EntityGuard]},
  {path:"courses", component: CourseComponent, canActivate: [EntityGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
