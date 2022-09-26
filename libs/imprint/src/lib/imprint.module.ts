import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImprintPageComponent } from './imprint-page/imprint-page.component';

@NgModule({
	imports: [
		CommonModule,

		RouterModule.forChild([
			{ path: '', component: ImprintPageComponent }
		]),
	],
	declarations: [ImprintPageComponent],
})
export class ImprintModule { }
