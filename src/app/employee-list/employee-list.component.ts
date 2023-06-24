import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit ,OnDestroy{

  employees: Employee[];
  subscription : Subscription

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
     /* this.employees=[{
        "id": 1,
        "firstName": "Prince",
        "lastName": "Kumar",
        "emailID": "prince5u@gmail.com"
      },
      {
        "id": 2,
        "firstName": "Milan",
        "lastName": "Panday",
        "emailID": "milan5u@gmail.com"
      }
    ]
    */
   this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      this.employees=data;
    })
  }

  id: number;
  //here Unsubscibe is done to avoid Memory leakage!!
  ngOnDestroy(): void {
     // this.subscription.unsubscribe();
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id])
  }

  viewEmployeeDetails(id: number){
    this.router.navigate(['employee-details', id])
  }

  deleteEmployee(id: number){
    this.id= this.activatedRoute.snapshot.params['id'];
    //this.router.navigate(['delete-employee', id])
    this.employeeService.deleteEmployee(id).subscribe(data=>{
        //after Deleting calling getEmployee()!!
        console.log(data);
        this.getEmployees();
    })
  }

}
