import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
	selector: 'trner-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss'],
})
export class NewComponent {

	@ViewChild('newSection')
	newSection!: ElementRef;
}


