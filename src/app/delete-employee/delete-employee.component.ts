import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  employee: Employee= new Employee();
  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router){}

  id: number;
  msg: String;

  ngOnInit(): void {
      this.activatedRoute.snapshot.params['id'];

  }

}
