import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PanelComponent } from './panel/panel.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LogoutComponent } from './logout/logout.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,

    PanelComponent,
    SideBarComponent,
    LogoutComponent,
  ],
  imports: [CommonModule, RouterModule, MatIconModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    PanelComponent,
    SideBarComponent,
    LogoutComponent,
  ],
})
export class CoreModule {}
