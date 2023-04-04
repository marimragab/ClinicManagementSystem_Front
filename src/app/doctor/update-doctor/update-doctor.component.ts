import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import{DoctorService} from '../../services/doctor.service'
import { FormBuilder, FormGroup, } from '@angular/forms';
import { Validators } from '@angular/forms';

import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent {
id!:number
doctors:Doctor[]=[]
doctor:Doctor=new Doctor(0,0,"","",0,{},0,"","",[],true)
doctorForm!:FormGroup
  constructor(private route: ActivatedRoute,public doctorServices:DoctorService,private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    
    })
 
    this.doctorServices.getAll().subscribe(data=>{
      this.doctors=data;
      console.log(this.doctors)
      this.doctor=this.doctors.find(doctor=>doctor._id==this.id) as Doctor
     console.log(this.doctor) 
  })

     this.doctorForm = this.formBuilder.group({
      firstName: ['' ],
      lastName: ['' ],
      phone: ['' ],
      age: ['' ],
      email:[''],
      password:[''],
      
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        building: [''],
      }),
      clinic:[[2]],
      specialty: [5],
      availability: [false],
      SSN: ['']
    })
    console.log(this.doctorForm.value)
   
  }
    
 
onSubmit() {
 
  console.log(this.doctorForm.value)
  this.doctor=this.doctorForm.value;
  if (this.doctorForm.valid) {
    this.doctorServices.edit(this.doctor).subscribe(data=>{
      console.log(data)
    })}}
    
  }
