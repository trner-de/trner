import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HowPageComponent } from './how-page/how-page.component';

@NgModule({
	imports: [
		CommonModule,

		RouterModule.forChild([
			{ path: '', component: HowPageComponent }
		]),
	],
	declarations: [HowPageComponent],
})
export class HowModule { }
