import { Component, ElementRef, ViewChild, } from '@angular/core';

@Component({
	selector: 'trner-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
	@ViewChild('heroSection')
	heroSection!: ElementRef;
}
