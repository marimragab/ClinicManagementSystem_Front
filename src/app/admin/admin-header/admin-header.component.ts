import { Component,EventEmitter,Output,ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
@Output() toggleSidenavbarForMe : EventEmitter<any> = new EventEmitter();
opensidenav(){
  this.toggleSidenavbarForMe.emit();
}
}
