import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
})
export class PatientProfileComponent {
  constructor(private user: AuthService) {}

  userInfo: any;
  role: string = 'patient';
  ngOnInit(): void {
    this.userInfo = this.user.getUser();
    console.log(this.userInfo);
  }
}
