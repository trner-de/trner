import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewComponent } from './new/new.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent,
      },
    ]),
  ],
  declarations: [HeroComponent, HomePageComponent, NewComponent],
})
export class HomeModule {}
