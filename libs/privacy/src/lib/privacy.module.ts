import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrivacyPageComponent } from './privacy-page/privacy-page.component';

@NgModule({
	imports: [
		CommonModule,

		RouterModule.forChild([
			{ path: '', component: PrivacyPageComponent }
		]),
	],
	declarations: [PrivacyPageComponent],
})
export class PrivacyModule { }
