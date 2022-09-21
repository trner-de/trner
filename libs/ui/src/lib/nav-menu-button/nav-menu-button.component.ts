import { Component, Input, OnInit } from '@angular/core';
import { NavMenuModel } from '../models/MenuModel';

@Component({
	selector: 'trner-nav-menu-button',
	templateUrl: './nav-menu-button.component.html',
	styleUrls: ['./nav-menu-button.component.scss'],
})
export class NavMenuButtonComponent implements OnInit {
	@Input()
	navItem!: NavMenuModel;
	@Input()
	variant = 'primary';


	constructor() { }

	ngOnInit(): void { }
}
