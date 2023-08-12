import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UtilityService } from '../utility.service';
import { Observable } from 'rxjs';
import { Note } from '../../classes/note';

const httpOptions ={
  headers: new HttpHeaders({
    'content-type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = environment.baseUrlApi
  private headers = new HttpHeaders;

  constructor(private httpClient: HttpClient, private utilityService: UtilityService) {
    httpOptions.headers = httpOptions.headers.set('Authorization', "Bearer " + this.utilityService.loadToken())
   }

   getAllNote():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'notes/all', httpOptions);
  }

  getAllNoteOfACourse(idCourse: number):Observable<any>{
    return this.httpClient.get<any>(this.baseUrl + 'notes/all-note-by/' + idCourse, httpOptions);
  }

  createNote(note: Note, idStudent: number, idCourse: number):Observable<Note>{
    return this.httpClient.post<Note>(this.baseUrl + 'notes/create-note/student/' + idStudent + '/course/' + idCourse, note, httpOptions);
  }

  deleteById(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.baseUrl + 'notes/'+ id, httpOptions);
  }
}
