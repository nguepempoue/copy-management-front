import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from 'src/app/core/classes/course';
import { User } from 'src/app/core/classes/user';
import { CourseService } from 'src/app/core/service/courses/course.service';
import { UserService } from 'src/app/core/service/users/user.service';
import { UtilityService } from 'src/app/core/service/utility.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @ViewChild('closeSaveModal') closeModal: any;

  courseForm!: FormGroup
  courses: Course[] = [];
  users: User[] = [];

  course: Course = new Course();
  isProgressing: boolean = false;

  constructor(private courseService: CourseService, private utilityService: UtilityService, private formBuilder: FormBuilder,private userService: UserService) { }

  ngOnInit(): void {
    this.getAllCourse();
    this.getAllUsersTeatcher();
    this.formInit();
  }

  
  getAllCourse(){
    this.courseService.getAllCourse().subscribe((res)=>{
      this.courses = res.data;
      console.log("this.users::", this.courses);
    })
  }

  getAllUsersTeatcher(){
    this.userService.getAllUsersTeatcher().subscribe((res)=>{
      this.users = res.data;
    })
  }

  formInit() {
    this.courseForm = this.formBuilder.group({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      evaluationNote: new FormControl(null, Validators.required),
      idTeather: new FormControl(null, Validators.required),
    })
  }

  onSave(){
    this.isProgressing = true
    const formValue = this.courseForm.value;
    this.course.name = formValue.name;
    this.course.description = formValue.description;
    this.course.evaluationNote = formValue.evaluationNote

    console.log("courses:: ", this.course);
    console.log("idTeather:: ", formValue.idTeather);

    this.courseService.createCourse(this.course, formValue.idTeather).subscribe((result: any)=>{
      console.log("result::", result);
      this.closeModal.nativeElement.click();
      this.getAllCourse();
    }, (error)=>{
      console.log("error::", error);
      
    })
  }
  

}
