import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudendsComponent } from './components/studends/studends.component';
import { StudentsAddComponent } from './components/students-add/students-add.component';

const routes: Routes = [
  {path:"", component :HomeComponent},
  {path:"students", component: StudendsComponent},
  {path:"addStudents", component: StudentsAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
