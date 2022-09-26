import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'trner-nav-hamburger',
	templateUrl: './nav-hamburger.component.html',
	styleUrls: ['./nav-hamburger.component.scss'],
})
export class NavHamburgerComponent {
	@Input() isMenuExpanded = false;
	@Output() toggleMenuEvent = new EventEmitter<boolean>();


	toggleMenu() {
		this.isMenuExpanded = !this.isMenuExpanded;
		this.toggleMenuEvent.emit(this.isMenuExpanded);
	}
}
