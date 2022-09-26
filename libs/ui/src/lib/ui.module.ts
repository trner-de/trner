import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { NavMennuListItemComponent } from './nav-mennu-list-item/nav-mennu-list-item.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent, NavMennuListItemComponent],
  exports: [NavbarComponent],
})
export class UiModule {}
