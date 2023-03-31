import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Specialist } from 'src/app/models/specialist';
import { SpecialistService } from 'src/app/services/specialist.service';

@Component({
  selector: 'app-specialist-edit',
  templateUrl: './specialist-edit.component.html',
  styleUrls: ['./specialist-edit.component.css']
})
export class SpecialistEditComponent {

  specialist: Specialist = new Specialist(0,"",true);
ngOnInit(){
  this.activatedroute.params.subscribe(p=>{
    this.specialistService.getSpecialistById(p['id']).subscribe((data:Specialist[])=>{
      this.specialist=data[0];
    })
  })
}
update(){
this.specialistService.updateSpecialist(this.specialist).subscribe(data=>{
  console.log(data);
  console.log(this.specialist);
  this.router.navigateByUrl("/specialist")
})
}
reactiveForm = new FormGroup({
  location: new FormGroup({
    city: new FormControl(null),
    street: new FormControl(null),
    building: new FormControl(null),
  }),
  mobilePhone: new FormControl(null),
  doctors: new FormControl(null),
  manager: new FormControl(null),
  availability: new FormControl(null),
});
  constructor(public specialistService: SpecialistService,
    public router: Router, public activatedroute:ActivatedRoute){}

}
