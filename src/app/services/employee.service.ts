import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl1="http://192.168.29.171:8080/api/v1/employees";
  private baseUrl2="http://192.168.29.171:8080/api/v1/send/employee";

  constructor(private httpClient: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
     console.log("this is Url1 : "+this.baseUrl1); 
     console.log("this is Url2 : "+this.baseUrl2);  

     return this.httpClient.get<Employee[]>(`${this.baseUrl1}`);
  }

  //method to save the employee in dB
  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl2}`, employee)
  }
   
  getEmployeeByID(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl1}/${id}`);
  }

  updateEmployee(id:number,employee: Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl1}/${id}`, employee);
  }

  deleteEmployee(id: number):Observable<Employee>{
    return this.httpClient.delete<Employee>(`${this.baseUrl1}/${id}`);
  }
}
