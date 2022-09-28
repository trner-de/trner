import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';


@Component({
	selector: 'trner-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'trner-de';

	constructor(@Inject(DOCUMENT) private document: Document) { }

	ngOnInit(): void {
		console.log();
		this.document.documentElement.classList.add('dark')
	}
}

