import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UtilityService } from '../utility.service';
import { Observable } from 'rxjs';
import { Course } from '../../classes/course';

const httpOptions ={
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = environment.baseUrlApi
  private headers = new HttpHeaders;

  constructor(private httpClient: HttpClient, private utilityService: UtilityService) {
    httpOptions.headers = httpOptions.headers.set('Authorization', "Bearer " + this.utilityService.loadToken())
   }

   getAllCourse():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'courses/all', httpOptions);
  }

  createCourse(course: Course, idTeather: number):Observable<Course>{
    return this.httpClient.post<Course>(this.baseUrl + 'courses/create-course/teatcher/' + idTeather, course, httpOptions);
  }

  findCourseById(id: string):Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'courses/id?id=' + id, httpOptions);
  }
}
