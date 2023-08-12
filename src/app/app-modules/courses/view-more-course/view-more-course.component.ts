import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/core/classes/course';
import { Note } from 'src/app/core/classes/note';
import { User } from 'src/app/core/classes/user';
import { CourseService } from 'src/app/core/service/courses/course.service';
import { NoteService } from 'src/app/core/service/notes/note.service';
import { UserService } from 'src/app/core/service/users/user.service';

@Component({
  selector: 'app-view-more-course',
  templateUrl: './view-more-course.component.html',
  styleUrls: ['./view-more-course.component.css']
})
export class ViewMoreCourseComponent implements OnInit {

  @ViewChild('closeSaveModal') closeModal: any;

  course: Course = new Course();
  note: Note = new Note();
  students: User[] = [];
  notes: Note[] = [];
  isProgressing: boolean = false;

  noteForm!: FormGroup

  constructor(private activatedRoute: ActivatedRoute,private courseService: CourseService, 
    private userService: UserService, private formBuilder: FormBuilder, private noteService: NoteService) { }
 
  ngOnInit(): void {
    this.getUCourse();
    this.getAllUsersStudent();
    this.formInit()
  }

  formInit() {
    this.noteForm = this.formBuilder.group({
      note: new FormControl(null, Validators.required),
      idStudent: new FormControl(null, Validators.required),
    })
  }

  getUCourse(){
    this.activatedRoute.queryParams.subscribe((params) => {

      this.courseService.findCourseById(params['id']).subscribe((res)=>{
        this.course = res.data;  
        this.getAllNotes();
      });
    })
  }

  getAllUsersStudent(){
    this.userService.getAllUsersStudent().subscribe((res)=>{
      this.students = res.data;
    })
  }

  getAllNotes(){
    this.noteService.getAllNoteOfACourse(this.course.id).subscribe((res)=>{
      this.notes = res.data;
      console.log("res:::::", res);
      
    })
  }

  

  onSaveNote(){
    this.isProgressing = true
    const formValue = this.noteForm.value;
    this.note.note = formValue.note;
    this.noteService.createNote(this.note, formValue.idStudent, this.course.id).subscribe((result: any)=>{

      this.closeModal.nativeElement.click();
      this.getAllNotes();
    }, (error)=>{
      console.log("error::", error);
      
    })
  }

  onClick(idNote: number){
    this.noteService.deleteById(idNote).subscribe((res)=>{
      this.getAllNotes();
    })
  }
  
}
