import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavMenuButtonComponent } from './nav-menu-button/nav-menu-button.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent, NavMenuButtonComponent],
  exports: [NavbarComponent, NavMenuButtonComponent],
})
export class UiModule {}
