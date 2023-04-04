import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import{Router} from '@angular/router'

import { Doctor } from 'src/app/models/doctor';
import {DoctorService} from '../../services/doctor.service'

@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent {
  //form: FormGroup;
  doctors:Doctor[]=[]
  doctorForm!: FormGroup;
  // firstName = new FormControl('');
  // lastName = new FormControl('');
  // phone = new FormControl('');
  // SSN = new FormControl('');
  // age = new FormControl('');
  // street = new FormControl('');
  // city = new FormControl('');
  // building = new FormControl('');
  // doctor:Doctor=new Doctor(0,0,"","",0,{},0,"",0,[],false)
  constructor(private formBuilder: FormBuilder, public doctorService:DoctorService,public router:Router){}
ngOnInit() {
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
    specialty: [11],
    availability: [false],
    SSN: ['']
  });
}

onSubmit() {
  if (this.doctorForm.valid) {
    this.doctorService.add(this.doctorForm.value).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl("/doctors")
    })

  }}
  back(){
    alert("added")
    this.router.navigate(["/doctors"])
  }
   
 
  


  // profileForm = this.fb.group({
  //   SSN: ['', Validators.required],
  //   firstName: [''],
  //   lastName: [''],
  //   phone: [''],
  //   age: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
      
      
  //   }),

  //   aliases: this.fb.array([
  //     this.fb.control('')
  //   ]),
  //   myDropdown: [''] 
  // });
  // public show(){
  //   console.log(this.name.value)
  // }


  // dropdownOptions = [
  //   { label: 'Option 1', value: 'option1' },
  //   { label: 'Option 2', value: 'option2' },
  //   { label: 'Option 3', value: 'option3' }
  // ];
  // // addAlias() {
  // //   this.aliases.push(this.fb.control(''));
  // // }
}



