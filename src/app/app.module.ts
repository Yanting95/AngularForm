import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { EmployeedetailComponent } from './employee/employeedetail/employeedetail.component';
import {AppRoutingModule} from './app-routing.module';
import { NamecapitalPipe } from './namecapital.pipe';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeecreateComponent } from './employee/employeecreate/employeecreate.component';
import { EmployeeeditComponent } from './employee/employeeedit/employeeedit.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeelistComponent,
    EmployeedetailComponent,
    NamecapitalPipe,
    PagenotfoundComponent,
    EmployeecreateComponent,
    EmployeeeditComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
