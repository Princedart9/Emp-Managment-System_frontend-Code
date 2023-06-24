import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  
  employee: Employee= new Employee();

  //employeeService as Well as the router is inject in the Constructor!!
  constructor(private employeeService: EmployeeService,
    private router: Router){};
  
  ngOnInit(): void {   
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data =>
        {
          console.log(data);
          this.goToEmployeeList();
        }, 
        error =>console.log(error));  
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

}
