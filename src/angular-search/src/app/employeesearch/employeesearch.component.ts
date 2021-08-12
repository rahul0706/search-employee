import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import * as moment from 'moment';

@Component({
  selector: 'employeesearch',
  templateUrl: './employeesearch.component.html',
  styleUrls: ['./employeesearch.component.scss']
})
export class EmployeesearchComponent implements OnInit {
  employees: Employee[]=[];
  employeeSearchForm:any = FormGroup;
  constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeSearchForm = this.formBuilder.group({
      name:[''],
      startDate: [],
      endDate: []
    });
  }

  onSubmit() {
     if (this.employeeSearchForm.invalid) {
       return; 
     }
     let startDate;
     let endDate;
     if(this.employeeSearchForm.value.startDate){
       startDate = this.employeeSearchForm.value.startDate;
       startDate = startDate.format('YYYY-MM-DD');
     }
     if(this.employeeSearchForm.value.endDate){
       endDate = this.employeeSearchForm.value.endDate;
       endDate = endDate.format('YYYY-MM-DD');
     }
     this.employeeService.searchEmployees(this.employeeSearchForm.value.name, startDate, endDate)
     .subscribe(
      data => {
        console.log(data);
        this.employees = data;
      },
      error => console.log(error));
  }

}
