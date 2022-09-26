import { Component, Input, OnInit } from '@angular/core';
import { NavMenuModel } from '../models/MenuModel';

@Component({
	selector: 'trner-nav-mennu-list-item',
	templateUrl: './nav-mennu-list-item.component.html',
	styleUrls: ['./nav-mennu-list-item.component.scss'],
})
export class NavMennuListItemComponent implements OnInit {
	@Input() navMenuModel: NavMenuModel | undefined
	constructor() { }

	ngOnInit(): void { }
}
