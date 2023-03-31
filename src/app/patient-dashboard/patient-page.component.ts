import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-patient-page',
  templateUrl: './patient-page.component.html',
  styleUrls: ['./patient-page.component.css'],
})
export class PatientPageComponent {
  constructor(private user: AuthService) {}

  userInfo: any;

  ngOnInit(): void {
    this.userInfo = this.user.getUser();
    console.log(this.userInfo);
  }
}
