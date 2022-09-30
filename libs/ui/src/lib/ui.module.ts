import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavMennuListItemComponent } from './nav-mennu-list-item/nav-mennu-list-item.component';
import { NavHamburgerComponent } from './nav-hamburger/nav-hamburger.component';
import { LogoComponent } from './logo/logo.component';
import { WorkWithUsComponent } from './work-with-us/work-with-us.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NavbarComponent,
    NavMennuListItemComponent,
    NavHamburgerComponent,
    LogoComponent,
    WorkWithUsComponent,
  ],
  exports: [NavbarComponent, WorkWithUsComponent],
})
export class UiModule {}
