import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EmployeeService } from './services/employee.service';
import { Employee } from '../models/employee.model';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  private employee: Employee;
  private _id : Number;
  constructor(private _aRout: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router) { }


  ngOnInit() {
    this._aRout.paramMap.subscribe(params => {
      this._id = +params.get('id');
      console.log(params['id']);
      this.employee = this._employeeService.getEmployee(this._id);
    });
  }

  viewNext()
  {
    if(this._id <2 ){
      this._id =  + this._id + 1;
    }
    else{
      this._id = 1;
    }
    

    this._router.navigate(['/employees' , this._id]);
  }
}
