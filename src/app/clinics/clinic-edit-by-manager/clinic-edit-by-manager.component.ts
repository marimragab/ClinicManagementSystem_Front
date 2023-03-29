import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinics } from 'src/app/models/clinics';
import { ClinicServicesService } from 'src/app/services/clinic-services.service';

@Component({
  selector: 'app-clinic-edit-by-manager',
  templateUrl: './clinic-edit-by-manager.component.html',
  styleUrls: ['./clinic-edit-by-manager.component.css']
})
export class ClinicEditByManagerComponent {

  clinic:Clinics=new Clinics(0,{city:"",street:"",building:0},"",[]);
ngOnInit(){
  this.activatedroute.params.subscribe(p=>{
    this.clinicsservices.getClincById(p['id']).subscribe((data:Clinics[])=>{
      this.clinic=data[0];
    })
  })
}
update(){
this.clinicsservices.updateClinicByManager(this.clinic).subscribe(data=>{
  console.log(data);
  console.log(this.clinic);
  this.router.navigateByUrl("/clinics")
})
}
  constructor(public clinicsservices : ClinicServicesService, public activatedroute:ActivatedRoute, public router: Router){}

}
