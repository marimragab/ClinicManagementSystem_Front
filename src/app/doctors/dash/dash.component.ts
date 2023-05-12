import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Doctor } from '../../models/doctor';
import { Appointment } from '../../models/appointment';
import { Prescription } from '../../models/prescription';
import { DoctorService } from '../../services/doctor.service';
import { AppointmentService } from '../../services/appointment.service';
import { PrescriptionService } from '../../services/prescription.service';
import { ReportService } from '../../services/report.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnDestroy {
  doctors: Doctor[] = [];
  doctor: Doctor = new Doctor(0, 0, '', '', 0, {}, 0, '', '', [], true);
  doctorId: number;
  appointment: Appointment[] = [];
  docAppoint: Appointment[] = [];
  isShowDiv:boolean=true
  /** @title Responsive sidenav */

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public doctorservice: DoctorService,
    public appointementservice: AppointmentService,
    public prescriptionservice: PrescriptionService,
    public report: ReportService,
    public router:Router
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(
    window.location.host
  );

  ngOnInit() {
    const doctorData = localStorage.getItem('current_user');

    // Parse the JSON string into an array of objects
    const doctors = JSON.parse(doctorData);

    // Access the _id property of the first element in the array
    this.doctorId = doctors[0]._id;

    console.log(this.doctorId);

    this.doctorservice.getAllDoctors().subscribe((data) => {
      this.doctors = data;
      console.log(this.doctors);
      this.doctor = this.doctors.find(
        (doctor) => doctor._id == this.doctorId
      ) as Doctor;
      console.log(this.doctor);
    });
  }
  // allAppointement() {
  //   this.appointementservice.getAllAppointments().subscribe((data) => {
  //     this.appointment = data;
  //     console.log(this.appointment);

  //     //this.docAppoint=this.appointment.find((app)=>app.doctorName == this.doctorId) as Appointment[]
  //     this.appointment.forEach((a) => {
  //       // console.log(a)
  //       console.log(a?.doctor);
  //       // console.log(this.docAppoint)
  //       if (a.doctor == this.doctorId) {
  //         this.docAppoint.push(a);
  //         // console.log(a)
  //         // console.log(a.doctor)
  //         console.log(this.docAppoint);
  //       }

  //       // console.log(this.docAppoint)
  //     });
  //     console.log(this.docAppoint);
  //   });
  // }
  allAppointement(){
    //this.router.navigateByUrl("/docAppoint/:"+this.doctorId)
    //[routerLink]="['details', row._id]"

    // // this.prescriptionservice.getAllPrescription().subscribe(a=>{
    // // this.report.getDailyAppointmentsForDoctor(this.doctorId).subscribe((a) => {
    // //   console.log(a);
    // });
  }
  allPres(){
    this.report.getDoctorAppointmentsOnDay("8/4/2023", this.doctorId).subscribe(a=>{
      console.log(a);

    })
  }

  toggleDisplayDiv() {  
    this.isShowDiv = !this.isShowDiv;  
  } 
}
