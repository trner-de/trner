import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewComponent } from './new/new.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UiModule } from '@trner/ui';

@NgModule({
	imports: [
		CommonModule,
		UiModule,
		RouterModule.forChild([
			{
				path: '',
				component: HomePageComponent,
			},
		]),
	],
	declarations: [
		HeroComponent,
		HomePageComponent,
		NewComponent,
		PortfolioComponent,
	],
})
export class HomeModule { }
