import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import{DoctorService} from '../../services/doctor.service'
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { Validators } from '@angular/forms';
import {ClinicServicesService} from '../../services/clinic-services.service'
import{Router} from '@angular/router'
import { Clinics } from 'src/app/models/clinics';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

import { Doctor } from 'src/app/models/doctor';
@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent {

id!:number
doctors:Doctor[]=[]
clinics:Clinics[]=[]
selectedClinic:number[]=[];
doctor:Doctor=new Doctor(0,0,"","",0,{},0,"","",[],true)
updatedUserData:Doctor=new Doctor(0,0,"","",0,{},0,"","",[],true)
doctorForm!:FormGroup
  constructor(
    private route: ActivatedRoute,
    public doctorServices:DoctorService,
    private formBuilder: FormBuilder,
    public clinicservice:ClinicServicesService,
    public router:Router) {}

  ngOnInit() {
    
    this.clinicservice.getAllClinc().subscribe(data=>{
      this.clinics=data;
      console.log(this.clinics);
    })

    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id)
    
    })
 
    this.doctorServices.getAllDoctors().subscribe(data=>{
      this.doctors=data;
      console.log(this.doctors)
      this.doctor=this.doctors.find(doctor=>doctor._id==this.id) as Doctor
     console.log(this.doctor) 
     this.doctorForm.patchValue(this.doctor);

    })
  
     
     this.doctorForm = this.formBuilder.group({
      SSN: [''],
      firstName: ['' ],
      lastName: ['' ],
      phone: ['' ],
      age: ['' ],
      // email:[''],
      // password:[''],
      
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        building: [''],
      }),
      clinic:[[2]],
      // specialty: [5],
       availability: [false],
    
    })
    console.log(this.doctorForm.value)
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
  onSubmit() {
    // retrieve updated data from the form
    // const updatedUserData = this.doctorForm.value;
    // // send the updated data to the server using the userService
    // this.doctorServices.edit(updatedUserData).subscribe(response => {
    //   console.log(response);
      console.log(this.doctor)
      const updatedDoctorData = this.doctorForm.value;
      // send the updated data to the server using the doctorService
      this.doctorServices.edit(this.id,updatedDoctorData).subscribe(response => {
        console.log(response);
        Swal.fire({  
          position: 'top-end',  
          icon: 'success',  
          title: 'Doctor updated',  
          showConfirmButton: true,  
          timer: 1500  
        }) 
        this.router.navigateByUrl("/doctors")
  })}

  back(){
    this.router.navigate(["/doctors"])
  }
    
}


