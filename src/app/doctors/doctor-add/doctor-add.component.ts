
import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, AbstractControl, ValidationErrors  } from '@angular/forms';
import { Validators } from '@angular/forms';
import{Router} from '@angular/router'
import {ClinicServicesService} from '../../services/clinic-services.service'
import {SpecialistService} from '../../services/specialist.service'
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { Observable } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';


import { Doctor } from 'src/app/models/doctor';
import {DoctorService} from '../../services/doctor.service'
import { Clinics } from 'src/app/models/clinics';
import { Specialist } from 'src/app/models/specialist';
import { validateVerticalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponen {
  isChecked = true;
  doctors:Doctor[]=[]
  doctorForm!: FormGroup;
  clinics:Clinics[]=[];
  speciality:Specialist[]=[];
  selectedspeciality:Number;
  selectedClinic:number[]=[];

  constructor(private formBuilder: FormBuilder, public doctorService:DoctorService,public router:Router, public clinicservice:ClinicServicesService, public specialityService:SpecialistService){
  }
  ngOnInit() {

    this.clinicservice.getAllClinc().subscribe(data=>{
      this.clinics=data;
      console.log(this.clinics);
    })
    this.specialityService.getAllSpecialis().subscribe(data=>{
      this.speciality=data;
      console.log(this.speciality);
    })

    
    this.doctorForm = this.formBuilder.group({
      SSN: ['',[Validators.required,Validators.minLength(14),Validators.maxLength(14)]],
      firstName: ['',[Validators.required,Validators.minLength(3)]],
      lastName: ['' ,[Validators.required,Validators.minLength(3)]],
      phone: ['',[Validators.required,Validators.minLength(11),Validators.maxLength(11)] ],
      age: ['',[Validators.required,Validators.min(24),Validators.max(50)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],

      address: this.formBuilder.group({
        street: [''],
        city: [''],
        building: [''],
      }),

      clinic:[this.selectedClinic],
      specialty:[this.selectedspeciality],
      availability: [this.isChecked],
 
    });

    
  }
  get clinic(): FormArray {
    return this.doctorForm.get('clinic') as FormArray;
  }

  onSelectionChanged(event: any) {
      this.selectedClinic.push(event.value) ;
      this.selectedClinic.forEach(a=>{
        console.log(a);
      })
    }

      onSelectionChange(event: any) {
        this.selectedspeciality=event.value ;
          console.log(this.selectedspeciality);
    }
  

  onSubmit() {
    if (this.doctorForm.valid) {
      this.doctorService.add(this.doctorForm.value).subscribe(data=>{
        console.log(data)
        Swal.fire({  
          position: 'top-end',  
          icon: 'success',  
          title: 'Doctor Successfully added',  
          showConfirmButton: true,  
          timer: 1500  
        }) 
        this.router.navigateByUrl("/doctors")
      })}}
  

  back(){
    this.router.navigate(["/doctors"])
  }
}


  
  
  
  
  
  
  
   





