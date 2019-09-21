import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employee/employeelist/employeelist.component';
import { EmployeedetailComponent} from './employee/employeedetail/employeedetail.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeecreateComponent } from './employee/employeecreate/employeecreate.component';
import { EmployeeeditComponent } from './employee/employeeedit/employeeedit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employees/new', component: EmployeecreateComponent},
  { path: 'employees/:id', component: EmployeedetailComponent},
  { path: 'employees/:id/edit', component: EmployeeeditComponent},
  { path: 'employees',   component: EmployeelistComponent,
    children: [
      { path: ':id', component: EmployeedetailComponent},
    ]},
  // { path: 'employees/edit/:id', component: EmployeeeditComponent},
  // { path: 'new/employees', component: EmployeecreateComponent},
  { path: '**',   component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeelistComponent,
                                  EmployeedetailComponent,
                                  EmployeecreateComponent,
                                  EmployeeeditComponent,
                                  HomeComponent,
                                  PagenotfoundComponent];
