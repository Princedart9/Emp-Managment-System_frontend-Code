import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}

  id: number;

  ngOnInit(): void {
    //storing the value of ID after getting from Activated Route!!
      this.id= this.activatedRoute.snapshot.params['id']

      this.employee= new Employee();
      this.employeeService.getEmployeeByID(this.id).subscribe(data=>{
        this.employee=data;
      })
  }
}
