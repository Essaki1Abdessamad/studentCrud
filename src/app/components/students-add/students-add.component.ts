import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Student } from 'src/app/model/student.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {

  studentFormGroup !: FormGroup;

  constructor(private formbuilder : FormBuilder, private studentsAPI : StudentsService) { }

  ngOnInit(): void {

    this.studentFormGroup = this.formbuilder.group({
      name : [''],
      class : [''],
      mark : [0],
      gender : ['']
    })

  }

  saveStudent(){

    this.studentsAPI.postStudent(this.studentFormGroup.value)
    .subscribe(data=>{
      alert('Student Saved !!')
    })
  }

}
