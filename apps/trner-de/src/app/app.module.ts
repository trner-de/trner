import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UiModule } from '@trner/ui';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		UiModule,
		RouterModule.forRoot(
			[
				{
					path: 'how',
					loadChildren: () => import('@trner/how').then((m) => m.HowModule),
				},
				{
					path: 'what',
					loadChildren: () => import('@trner/what').then((m) => m.WhatModule),
				},
				{
					path: 'privacy',
					loadChildren: () =>
						import('@trner/privacy').then((m) => m.PrivacyModule),
				},
				{
					path: 'imprint',
					loadChildren: () =>
						import('@trner/imprint').then((m) => m.ImprintModule),
				},
			],
			{ initialNavigation: 'enabledBlocking' }
		),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
