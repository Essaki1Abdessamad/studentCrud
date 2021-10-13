import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudendsComponent } from './components/studends/studends.component';
import { StudentsAddComponent } from './components/students-add/students-add.component';
import { StudentsEditComponent } from './components/students-edit/students-edit.component';

const routes: Routes = [
  {path:"", component :HomeComponent},
  {path:"students", component: StudendsComponent},
  {path:"addStudents", component: StudentsAddComponent},
  {path:"editStudents/:id", component: StudentsEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
