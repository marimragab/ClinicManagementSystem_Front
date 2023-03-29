import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinics } from 'src/app/models/clinics';
import { ClinicServicesService } from 'src/app/services/clinic-services.service';

@Component({
  selector: 'app-clinic-edit-by-admin',
  templateUrl: './clinic-edit-by-admin.component.html',
  styleUrls: ['./clinic-edit-by-admin.component.css']
})
export class ClinicEditByAdminComponent {
  doctor: number[]=[
    1,2,3,4
   ]
   manager: number[]=[
     1,2,3,4
   ]
  clinic:Clinics=new Clinics(0,{city:"",street:"",building:0},"",[],0,true);
ngOnInit(){
  this.activatedroute.params.subscribe(p=>{
    this.clinicsservices.getClincById(p['id']).subscribe((data:Clinics[])=>{
      this.clinic=data[0];
    })
  })
}
update(){
this.clinicsservices.updateClinicByAdmin(this.clinic).subscribe(data=>{
  console.log(data);
  console.log(this.clinic);
  this.router.navigateByUrl("/clinics")
})
}
  constructor(public clinicsservices : ClinicServicesService, public activatedroute:ActivatedRoute, public router: Router){}

}
