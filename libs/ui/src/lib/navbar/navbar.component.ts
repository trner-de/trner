import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavMenuModel } from '../models/MenuModel';
// import { gsap } from 'gsap';
// import ScrollTrigger from "gsap/ScrollTrigger";
import { repeat } from 'rxjs';

// gsap.registerPlugin(ScrollTrigger)

@Component({
	selector: 'trner-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
	isMenuExpanded = false;
	menuItems: NavMenuModel[] = [
		{
			title: 'Home',
			route: 'home',
		},
		{
			title: 'How',
			route: 'how',
		},
		{
			title: 'What',
			route: 'what',
		},
		{
			title: 'Privacy',
			route: 'privacy',
		},
		{
			title: 'Imprint',
			route: 'imprint',
		}
	];


	// menu!: HTMLCollection;
	// logo!: HTMLElement;
	// logoText!: HTMLElement;

	constructor(protected element: ElementRef) {


	}


	menuToggle(state: boolean) {
		this.isMenuExpanded = state
	}

}
	// this.menu = this.element.nativeElement.querySelector('.menu').children;
	// this.logo = this.element.nativeElement.querySelector('.logo');
	// this.logoText = this.element.nativeElement.querySelector('.logo-text');

	// this.timeline();
//}

	// timeline() {


	// 	console.log(this.logo);
	// 	const tl = gsap.timeline()
	// 		.from(this.logo, { opacity: 0, scale: 0, ease: "back", duration: 0.8 })
	// 		.from(this.logoText, { xPercent: -100, duration: 0.4 })
	// 		.from(this.menu, { duration: 0.8, yPercent: -150, ease: "back", stagger: 0.3 })
	// }
