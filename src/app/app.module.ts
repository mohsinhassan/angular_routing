import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule , Routes} from '@angular/router';
import {FormsModule } from '@angular/forms';
import { ListEmployeeComponent } from './employees/list-employee/list-employee.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';


const appRoutes : Routes = [
  {  path: "list" , component : ListEmployeeComponent},
  {  path: "create" , component : CreateEmployeeComponent},
  {  path: "" , redirectTo : '/list' , pathMatch: 'full' }
  ];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
