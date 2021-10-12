import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student.model';
import {StudentsService} from '../../../services/students.service'


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {


  studentData !: any;

  constructor(private studentsAPI : StudentsService) {
    this.getAllEmployee()
   }

  ngOnInit(): void {
  }

  getAllEmployee(){
    this.studentsAPI.getStudents()
    .subscribe(res=>{
      this.studentData = res;
    })
  }

  onDelete(student : Student){
    this.studentsAPI.deleteStudent(student.id)
    .subscribe(res=>{
      alert("Student Deleted")
      this.getAllEmployee()
    })
  }

  onUpdate(){}

}
