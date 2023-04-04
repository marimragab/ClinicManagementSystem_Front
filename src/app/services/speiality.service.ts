import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Speciality } from '../models/speciality';

@Injectable({
  providedIn: 'root'
})
export class SpeialityService {

  
  baseUrl ="http://localhost:8080/specialties/"

  getAll(){
   return this.http.get<Speciality[]>(this.baseUrl)
  }

  constructor(public http:HttpClient) {
 
   }
   add(spec:Speciality){
       return this.http.post<Speciality>(this.baseUrl,spec);
   }
   getById(id:number){
    return this.http.get<Speciality>(this.baseUrl+id)
   }
   deleteById(id:number){
      return this.http.delete(this.baseUrl+id)
   }
   edit(spec:Speciality){
      return this.http.put(this.baseUrl+spec._id,spec)
   }
}
