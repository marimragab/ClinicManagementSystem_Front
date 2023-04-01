import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Specialist } from 'src/app/models/specialist';
import { SpecialistService } from 'src/app/services/specialist.service';

@Component({
  selector: 'app-specialist-add',
  templateUrl: './specialist-add.component.html',
  styleUrls: ['./specialist-add.component.css']
})
export class SpecialistAddComponent {
  
  specialist: Specialist = new Specialist(0,"",true);
  save(specialist: any) {
    // this.clinicservices.addClinic(this.clinic).subscribe(data=>{
    //     console.log(data);
    //     this.router.navigateByUrl("/clinics");
    //    })
    console.log(specialist);
    this.specialistService.addSpecialist(specialist).subscribe((data) => {
      console.log(data);
      this.router.navigateByUrl('/specialist');
    });
  }
  //reactiveForm: FormGroup;
  constructor(
    public specialistService: SpecialistService,
    public router: Router
  ) {}

  reactiveForm = new FormGroup({
    
    specialty: new FormControl(null),
    
    availability: new FormControl(null),
  });
}
