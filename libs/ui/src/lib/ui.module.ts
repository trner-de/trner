import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavMennuListItemComponent } from './nav-mennu-list-item/nav-mennu-list-item.component';
import { NavHamburgerComponent } from './nav-hamburger/nav-hamburger.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavbarComponent,
    NavMennuListItemComponent,
    NavHamburgerComponent,
    LogoComponent,
  ],
  exports: [NavbarComponent],
})
export class UiModule {}
