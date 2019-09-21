import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../employee.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {
  public employeeId;
  public employee = [];
  public errorMsg;
  constructor(private empService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.employeeId = id;
    });
    this.empService.getEmployeeDetail(this.employeeId).subscribe(
      (data) => {console.log(data); this.employee = data; },
      (error) => {this.errorMsg = error; console.log(error); }
    );
  }

  goBack() {
    this.router.navigate(['/employees'], { relativeTo: this.route });
  }
}
