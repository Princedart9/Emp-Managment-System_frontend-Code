import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{

  employee: Employee= new Employee();
  
  //DI injection inside Constructor!!
  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute, 
    private router: Router){}

  id: number;

  ngOnInit(): void {
    //Using activate Route to get the ID!!
    this.id= this.activatedRoute.snapshot.params['id'];

    //this Methods will get the value from the dB and give Back to the Update Page 
    //beacuse here updating the employee through subscribe!!
    //ngModel will take care after this steps!!
    this.employeeService.getEmployeeByID(this.id).subscribe(data=>{
      this.employee =data;
    },error=> console.log(error));
    
  }

  //
  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data=>{
      this.router.navigate(['/employees'])
    });
  }

}
