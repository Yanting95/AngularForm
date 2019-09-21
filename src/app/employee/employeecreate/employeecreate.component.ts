import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../employee.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit {
  public employeeForm: FormGroup;
  constructor(private fb: FormBuilder, private empService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      department: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.employeeForm);
    console.log(this.employeeForm.value);
    this.empService.addEmployee(this.employeeForm.value)
      .subscribe(
        response => {
          console.log('Success!', response);
          this.router.navigate(['/employees']);
        },
        error => console.error('Error!', error)
      );
  }

}
