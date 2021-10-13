import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {

  studentId : number;
  studentFormGroup !: FormGroup;

  constructor(private formbuilder : FormBuilder, 
    private studentsAPI : StudentsService, 
    private activatedRoute : ActivatedRoute) {
      this.studentId=activatedRoute.snapshot.params.id;
     }

  ngOnInit(): void {

    this.studentsAPI.getStudent(this.studentId)
      .subscribe(std=>
        this.studentFormGroup = this.formbuilder.group({
          id : std.id,
          name : std.name,
          class : std.class,
          mark : std.mark,
          gender : std.gender
        })
     )

  }

  editStudent(){
    this.studentsAPI.updateStudent(this.studentFormGroup.value)
      .subscribe(res=>{
        alert("Student Updated !!")
      })
  }
}
