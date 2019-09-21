import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../employee.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  public employees = [];
  public errorMsg;
  constructor(private empService: EmployeeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.empService.getEmployees().subscribe(
      (data) => this.employees = data,
      (error) => this.errorMsg = error
    );
  }

  onSelect(employee) {
    console.log(employee)
    this.router.navigate(['/employees', employee.id]);
  }

  detail(employee) {
    this.router.navigate([employee.id], { relativeTo: this.route });
  }
  create() {
    // this.router.navigate(['/new/employees']);
    this.router.navigate(['/employees/new']);
  }
  delete(id, index) {
    this.empService.deleteEmployee(id).subscribe(
      response => {
        this.employees.splice(index, 1);
      },
      error => console.error('Error!', error)
    );
    // this.router.navigate(['/employees']);
  }
  edit(employee) {
    // this.router.navigate(['/employees', 'edit', employee.id]);
    this.router.navigate(['/employees', employee.id, 'edit']);
    // this.router.navigate([employee.id, 'edit'], { relativeTo: this.route });

  }
}
