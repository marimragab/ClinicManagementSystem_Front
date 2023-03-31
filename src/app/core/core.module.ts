import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PanelComponent } from './panel/panel.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

    PanelComponent,
    SideBarComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, FooterComponent, PanelComponent, SideBarComponent],
})
export class CoreModule {}
