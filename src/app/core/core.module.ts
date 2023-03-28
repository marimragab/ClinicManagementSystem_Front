import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LeftPanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FooterComponent,LeftPanelComponent]
})
export class CoreModule { }
