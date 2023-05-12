import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, AbstractControl, ValidationErrors  } from '@angular/forms';
import { Validators } from '@angular/forms';
import{Router,ActivatedRoute} from '@angular/router'
import {ClinicServicesService} from '../../services/clinic-services.service'
import {PatientService} from '../../services/patient.service'
import {PrescriptionService} from '../../services/prescription.service'
import {MedicineService} from '../../services/medicine.service'
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { Observable } from 'rxjs';
import { NgSelectModule } from '@ng-select/ng-select';
import { Clinics } from 'src/app/models/clinics';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Patient } from 'src/app/models/patient';
import { Medicine } from 'src/app/models/medicine';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent {

  presForm!: FormGroup;
  medicin:FormGroup
  clinics:Clinics[]=[];
  patients:Patient[]=[];
  medicines:Medicine[]=[]
  selectedpatient:number;
  selectedClinic:number;
  selectedmedicine:number
  id:number

  constructor(private formBuilder: FormBuilder, 
            public router:Router, 
            public clinicservice:ClinicServicesService,
            public presService:PrescriptionService,
            public patientService:PatientService,
            public medicineService:MedicineService,
            public route:ActivatedRoute){
          }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    })
    this.clinicservice.getAllClinc().subscribe(data=>{
      this.clinics=data;
      console.log(this.clinics);
    })
    this.patientService.getAllPatients().subscribe(data=>{
      this.patients=data;
      console.log(this.patients);
    })
    this.medicineService.getAllMedicine().subscribe(data=>{
      this.medicines=data;
      console.log(this.medicines);
    })
   

    // const medicineFormGroup = this.formBuilder.group({
    //   name: ['', ,[Validators.required]],
    //   dosage: ['', Validators.required],
    //   frequency: ['', Validators.required],
    // });

    this.presForm = this.formBuilder.group({
      clinic:[this.selectedClinic,[Validators.required]],
      doctor:[this.id],
      patient:[this.selectedpatient,[Validators.required]],   
      medicine: this.formBuilder.array([]),
      notes:['',[Validators.required]]
    });
  
    this.addMedicine()
    }

  get medicine(): FormArray {
    return this.presForm.get('medicine') as FormArray;
  }
  
  addMedicine() {
    const medicineFormGroup  = this.formBuilder.group({
      medicineId: [this.selectedmedicine,[Validators.required]],
      quantity: ['',[Validators.required,Validators.minLength(5)]],
      medicineDosage: ['',[Validators.required,Validators.minLength(5)]]
    });
    const medicineFormArray = this.presForm.get('medicine') as FormArray
    
    (this.presForm.get('medicine') as FormArray).push(medicineFormGroup );
  
  }
  onSelectionChanged(event: any,clinic:any) {
    console.log(clinic)
      this.selectedClinic=clinic;
        console.log(this.selectedClinic);
     
    }

    onSelectionChange(event: any,patient:any) {
      console.log(patient)
        this.selectedpatient=patient;
          console.log(this.selectedpatient);
      }

      onSelect(event: any,medicine:any) {
        console.log(medicine)
          this.selectedmedicine=medicine;
            console.log(this.selectedmedicine);
        }

  onSubmit() {
    const patient = this.presForm.get('patient').value;
    console.log(patient)
    if (!patient) {
      console.log('Patient value is invalid');
      return;
    }
    if (this.presForm.valid) {
      console.log(this.presForm.value);
      this.presService.addPrescription(this.presForm.value).subscribe(data=>{
        console.log(data)
        Swal.fire({  
          position: 'top-end',  
          icon: 'success',  
          title: 'Prescription Successfully added',  
          showConfirmButton: true,  
          timer: 1500  
        }) 
        this.router.navigateByUrl("/home")
      })}}
  

  back(){
    this.router.navigate(["/doctors"])
  }
}


  
  
  
  
  
  
  
   







