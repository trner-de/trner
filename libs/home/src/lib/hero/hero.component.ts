import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ThemeSwitcherService } from '@trner/ui';
import { gsap, Back } from 'gsap';

@Component({
	selector: 'trner-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild('heroSection')
	heroSection!: ElementRef;

	@ViewChild('headline')
	headline!: HTMLElement;

	@ViewChild('subline')
	subline!: HTMLElement;

	@ViewChild('sideBar')
	sideBar!: HTMLElement;

	@ViewChild('ring1')
	ring1!: ElementRef;

	@ViewChild('ring2')
	ring2!: ElementRef;

	@ViewChild('ring3')
	ring3!: ElementRef;

	@ViewChild('ring4')
	ring4!: ElementRef;

	observer!: IntersectionObserver;

	constructor(private themeSwitcher: ThemeSwitcherService, protected element: ElementRef) { }

	ngOnInit(): void {
		this.headline = this.element.nativeElement.querySelector('.headline');
		this.subline = this.element.nativeElement.querySelector('.subline');
		this.sideBar = this.element.nativeElement.querySelector('.sidebar');
		this.ring1 = this.element.nativeElement.querySelector('.ring1');
		this.ring2 = this.element.nativeElement.querySelector('.ring2');
		this.ring3 = this.element.nativeElement.querySelector('.ring3');
		this.ring4 = this.element.nativeElement.querySelector('.ring4');

		this.animateTimeline();
	}

	ngAfterViewInit() {
		const threshold = 0.6; // how much % of the element is in view
		this.observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// animation code
						this.themeSwitcher.toggleTheme(['dark', 'animate-lightToDark', 'bg-gray-900']);
					}
				});
			},
			{ threshold }
		);
		this.observer.observe(this.heroSection.nativeElement);
	}

	ngOnDestroy(): void {
		this.observer.disconnect();
	}

	animateTimeline() {
		const tl = gsap.timeline()
			.from(this.headline, { duration: 1, y: 100, opacity: 0, ease: 'power4.out' })
			.from(this.subline, { duration: 1, y: 100, opacity: 0, ease: 'power3.out' }, '-=0.5')
			.from(this.sideBar, { duration: 1.5, yPercent: 100, opacity: 0, ease: 'expo.out' }, '-=0.5')
			.from(this.ring1, { duration: 0.5, xPercent: -100, yPercent: 100, opacity: 0, ease: Back.easeOut.config(1) }, '-=1.5')
			.from(this.ring2, { duration: 0.6, xPercent: -100, yPercent: 100, opacity: 0, ease: Back.easeOut.config(2) }, '-=1.5')
			.from(this.ring3, { duration: 0.7, xPercent: -100, yPercent: 100, opacity: 0, ease: Back.easeOut.config(2) }, '-=1.5')
			.from(this.ring4, { duration: 0.8, xPercent: -100, yPercent: 100, opacity: 0, ease: Back.easeOut.config(2) }, '-=1.5');
	}
}
