import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-students-nav-bar',
  templateUrl: './students-nav-bar.component.html',
  styleUrls: ['./students-nav-bar.component.css']
})
export class StudentsNavBarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onNewStudent(){
    this.router.navigateByUrl("/addStudents")
  }

}
