import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {
title = 'Admin Page';
sideBarOpen =true;
ngOnInit(){

}
sideBarToggler(){
  this.sideBarOpen= !this.sideBarOpen;
}
}
