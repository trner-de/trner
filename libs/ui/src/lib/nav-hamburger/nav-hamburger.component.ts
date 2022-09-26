import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'trner-nav-hamburger',
	templateUrl: './nav-hamburger.component.html',
	styleUrls: ['./nav-hamburger.component.scss'],
})
export class NavHamburgerComponent {
	@Output() toggleMenuEvent = new EventEmitter();


	toggleMenu() {
		this.toggleMenuEvent.emit();
	}
}
