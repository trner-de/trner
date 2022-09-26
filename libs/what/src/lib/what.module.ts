import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WhatPageComponent } from './what-page/what-page.component';

@NgModule({
	imports: [
		CommonModule,

		RouterModule.forChild([
			{ path: '', component: WhatPageComponent }
		]),
	],
	declarations: [WhatPageComponent],
})
export class WhatModule { }
