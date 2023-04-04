import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Prescription } from '../models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {


  baseUrl ="http://localhost:8080/presciption/"

  getAll(){
   return this.http.get<Prescription[]>(this.baseUrl)
  }

  constructor(public http:HttpClient) {
 
   }
   add(pre:Prescription){
       return this.http.post<Prescription>(this.baseUrl,pre);
   }
   getById(id:number){
    return this.http.get<Prescription>(this.baseUrl+id)
   }
   deleteById(id:number){
      return this.http.delete(this.baseUrl+id)
   }
   edit(pre:Prescription){
      return this.http.patch(this.baseUrl+pre._id,pre)
   }
}
