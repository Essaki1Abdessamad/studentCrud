import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http : HttpClient) { }

  getStudents() {
    return this.http.get<Student[]>("http://localhost:3000/students")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getStudent(id : number) {
    return this.http.get<Student>("http://localhost:3000/students/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  postStudent(student : Student) {
    return this.http.post<Student[]>("http://localhost:3000/students",student)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteStudent(id : Number) {
    return this.http.delete<Student[]>("http://localhost:3000/students/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateStudent(student : Student) {
    return this.http.put<Student[]>("http://localhost:3000/students/"+student.id,student)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
