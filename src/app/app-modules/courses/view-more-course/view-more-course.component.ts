import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/core/classes/course';
import { CourseService } from 'src/app/core/service/courses/course.service';

@Component({
  selector: 'app-view-more-course',
  templateUrl: './view-more-course.component.html',
  styleUrls: ['./view-more-course.component.css']
})
export class ViewMoreCourseComponent implements OnInit {

  course: Course = new Course();

  constructor(private activatedRoute: ActivatedRoute,private courseService: CourseService) { }
 
  ngOnInit(): void {
    this.getUCourse()
  }

  getUCourse(){
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log("id::", params['id']);
      
      this.courseService.findCourseById(params['id']).subscribe((res)=>{
        this.course = res.data;

        console.log("course::", res);
        
       
      });
    })
  }
}
