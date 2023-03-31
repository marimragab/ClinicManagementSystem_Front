import { Component, Input, SimpleChanges } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  @Input() role: string;
  permissions: string[] = [];

  constructor(private authenticationService: AuthenticationService) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['role'] && changes['role'].currentValue) {
      this.permissions = this.authenticationService.getPermissionsForRole(
        this.role
      );
    }
  }
}
