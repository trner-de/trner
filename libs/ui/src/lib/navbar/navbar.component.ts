import { Component, OnInit } from '@angular/core';
import { NavMenuModel } from '../models/MenuModel';

@Component({
	selector: 'trner-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
	menuItems: NavMenuModel[] = [
		{
			title: 'Home',
			route: '/',
		},
		{
			title: 'Über uns',
			route: '/about',
		},
		{
			title: 'Kontakt',
			route: '/kontakt',
		},
	];



	constructor() { }

	ngOnInit(): void { }
}
