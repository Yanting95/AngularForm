import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../employee.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.css']
})
export class EmployeeeditComponent implements OnInit {

  public employeeId;
  public employee;
  public employeeForm: FormGroup;
  constructor(private fb: FormBuilder, private empService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.employeeId = id;
    });
    this.employeeForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      department: ['', [Validators.required]],
    });
    this.empService.getEmployeeDetail(this.employeeId).subscribe(
      (data) => {
        this.employee = data;
        this.employeeForm.setValue({
          first_name: this.employee.first_name,
          last_name: this.employee.last_name,
          salary: this.employee.salary,
          department: this.employee.department,
      });
      }
    );
  }

  onSubmit() {
    console.log(this.employeeId);
    console.log(this.employeeForm.value);
    this.empService.editEmployee(this.employeeForm.value, this.employeeId)
      .subscribe(
        response => {
          console.log('Success!', response);
          this.router.navigate(['/employees']);
        },
        error => console.error('Error!', error)
      );
  }

}
