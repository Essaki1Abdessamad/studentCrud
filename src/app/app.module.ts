import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudendsComponent } from './components/studends/studends.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { StudentsNavBarComponent } from './components/studends/students-nav-bar/students-nav-bar.component';
import { StudentsListComponent } from './components/studends/students-list/students-list.component';
import { StudentsAddComponent } from './components/students-add/students-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudendsComponent,
    NavBarComponent,
    HomeComponent,
    StudentsNavBarComponent,
    StudentsListComponent,
    StudentsAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
