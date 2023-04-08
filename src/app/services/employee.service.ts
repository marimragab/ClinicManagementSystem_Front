import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseurl ="http://localhost:8080/employees/"
  
getAllemplyees(){
 return this.http.get<Employee[]>(this.baseurl)
}
getEmployeeById(id:number) {
  return this.http.get<Employee[]>(this.baseurl+id)
 }
 addEmployee(emp:Employee){
  return this.http.post<Employee[]>(this.baseurl,emp)
 }
 updateEmployee(id: number,emp:Employee){
  return this.http.patch<Employee>(this.baseurl+'admin/' + id,emp)
}
// updateEmployeeByManager(id: number,emp:Employee){
//   return this.http.put<Employee>(this.baseurl+emp._id,emp)
// }
deleteEmployaaById(id:number) {
  return this.http.delete<Employee>(this.baseurl+id)
 }
  constructor(public http:HttpClient) { }
}
