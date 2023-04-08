import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { ClinicServicesService } from 'src/app/services/clinic-services.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees-update',
  templateUrl: './employees-update.component.html',
  styleUrls: ['./employees-update.component.css']
})
export class EmployeesUpdateComponent {
  // emp:Employee=new Employee(0,"","",0,{city:"",street:"",building:0},"");
  // ngOnInit(){
  //   this.activatedroute.params.subscribe(p=>{
  //     this.employeeservice.getEmployeeById(p['id']).subscribe((data:Employee[])=>{
  //       this.emp=data[0];
  //     })
  //   })
  // }
  // update(){
  // this.employeeservice.updateEmployee(this.emp).subscribe(data=>{
  //   console.log(data);
  //   this.router.navigateByUrl("/employees")
  // })
  // }
    constructor(public employeeservice : EmployeeService,
      private clinicService: ClinicServicesService,
       public activatedroute:ActivatedRoute, 
       public router: Router){}
  
       successMessage: string;
       errorMessage: string;
       clinics: any[];
       clinicDoctors: any[];
       employeeId: number;
       managerName: string;
       showForm: boolean = true;

       editEmployrrForm = new FormGroup({
        SSN:new FormControl('', [Validators.required]),
        firstName:new FormControl('', [Validators.required]),
        lastName:new FormControl('', [Validators.required]),
        age:new FormControl('', [Validators.required]),
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        building: new FormControl(0, [Validators.required]),
      }),
      password:new FormControl([], [Validators.required]),
      email:new FormControl([], [Validators.required]),
      phone:new FormControl([], [Validators.required]),
      job:new FormControl([], [Validators.required]),
      salary:new FormControl([], [Validators.required]),
      clinic: new FormControl('', [Validators.required]),
      availability: new FormControl(true, [Validators.required]),
    });
    get employeeValues() {
        return this.editEmployrrForm.controls;
      }
      emp : any;

      ngOnInit() {
          // this.getAllClinc();
          this.activatedroute.params.subscribe((p) => {
            this.employeeservice.getEmployeeById(p['id']).subscribe((data: any) => {
              console.log(data.Data[0]);
              this.emp = data.Data[0];
              console.log(this.emp);
              this.employeeId = this.emp._id;
              this.editEmployrrForm.patchValue({
                SSN: this.emp.SSN,
                firstName: this.emp.firstName,
                lastName :this . emp. lastName,
                age: this.emp.age,
                address: {
                  city: this.emp.address.city,
                  street: this.emp.address.street,
                  building: this.emp.address.building,
                },
                password: this.emp.password,
                email: this.emp.email,
                phone: this.emp.phone,
                job: this.emp.job,
                salary: this.emp.salary,
                clinic: this.emp.clinic._id,
                availability: this.emp.availability,
              });
              // console.log(this.clinic.doctors);
              // this.clinicDoctors = this.clinic.doctors.map((doctor) => doctor._id);
      
              // this.managerName = ` ${this.clinic.manager.firstName} ${this.clinic.manager.lastName}`;
            });
          });
        }
        updateEmployee(emp: any) {
            console.log(this.editEmployrrForm);
            console.log(this.editEmployrrForm.value);
        
            this.employeeservice.updateEmployee(this.employeeId, emp).subscribe({
              next: (data: any) => {
                console.log(data.Data[0]);
                this.successMessage = data.Message;
                const form = document.getElementById('employeeForm') as HTMLFormElement;
                form.reset();
                this.showForm = false;
              },
              error: (error) => {
                this.errorMessage = error;
                console.log(error);
              },
            });
          }
      //     getAllClinic() {
      // this.clinicService.getAllClinc().subscribe((data: any) => {
      //   console.log(data);
      //   this.cli = data.Data;
      // });
    }
      //  "SSN":26111172211111,
      //           "firstName":"amr",
      //           "lastName":"khaled",
      //           "age":29,
      //           "address":{
      //               "city":"Alex",
      //               "street":"school",
      //               "building":20
      //           },
      //           "password":"123ITkknn",
      //           "email":"amrrrr@gmail.com",
      //           "phone":"01098188888",
      //           "job":"receptionist",
      //           "salary":2000,
      //           "clinic":3,
      //           "availability":true
      //       }










    // constructor(
    //   private clinicService: ClinicServicesService,
    //   private doctoeService: DoctorService,
    //   public activatedroute: ActivatedRoute,
    //   public router: Router
    // ) {}
  
    // successMessage: string;
    // errorMessage: string;
    // doctors: any[];
    // clinicId: number;
    // managerName: string;
  
    // clinicDoctors: any[];
    // showForm: boolean = true;
  
    // editClinicForm = new FormGroup({
    //   location: new FormGroup({
    //     city: new FormControl('', [Validators.required]),
    //     street: new FormControl('', [Validators.required]),
    //     building: new FormControl(0, [Validators.required]),
    //   }),
    //   mobilePhone: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(/^01[0125][0-9]{8}$/),
    //   ]),
    //   doctors: new FormControl([], [Validators.required]),
    //   manager: new FormControl('', [Validators.required]),
    //   availability: new FormControl(true, [Validators.required]),
    // });
  
    // get clinicValues() {
    //   return this.editClinicForm.controls;
    // }
  
    // clinic: any;
    // ngOnInit() {
    //   this.getAllDoctors();
    //   this.activatedroute.params.subscribe((p) => {
    //     this.clinicService.getClincById(p['id']).subscribe((data: any) => {
    //       console.log(data);
    //       this.clinic = data.Data[0];
    //       console.log(this.clinic);
    //       this.clinicId = this.clinic._id;
    //       this.editClinicForm.patchValue({
    //         location: {
    //           city: this.clinic.location.city,
    //           street: this.clinic.location.street,
    //           building: this.clinic.location.building,
    //         },
    //         mobilePhone: this.clinic.mobilePhone,
    //         manager: this.clinic.manager._id,
    //         doctors: this.clinic.doctors,
    //         availability: this.clinic.availability,
    //       });
    //       console.log(this.clinic.doctors);
    //       this.clinicDoctors = this.clinic.doctors.map((doctor) => doctor._id);
  
    //       this.managerName = ` ${this.clinic.manager.firstName} ${this.clinic.manager.lastName}`;
    //     });
    //   });
    // }
    // updateClinic(clinic: any) {
    //   console.log(this.editClinicForm);
    //   console.log(this.editClinicForm.value);
  
    //   this.clinicService.updateClinicByAdmin(this.clinicId, clinic).subscribe({
    //     next: (data: any) => {
    //       console.log(data);
    //       this.successMessage = data.Message;
    //       const form = document.getElementById('clinicForm') as HTMLFormElement;
    //       form.reset();
    //       this.showForm = false;
    //     },
    //     error: (error) => {
    //       this.errorMessage = error;
    //       console.log(error);
    //     },
    //   });
    // }
  
    // getAllDoctors() {
    //   this.doctoeService.getAllDoctors().subscribe((data: any) => {
    //     console.log(data);
    //     this.doctors = data.Data;
    //   });
    // }
