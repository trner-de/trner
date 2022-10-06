import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ThemeSwitcherService } from '@trner/ui';
import { gsap, Back } from 'gsap';
import { HeroComponent } from '../hero/hero.component';
import { NewComponent } from '../new/new.component';
@Component({
	selector: 'trner-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {

	@ViewChild(HeroComponent)
	heroComponent!: HeroComponent;

	@ViewChild(NewComponent)
	newComponent!: NewComponent;

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

	heroObserver!: IntersectionObserver;
	newObserver!: IntersectionObserver;

	first: string[] = ['dark', 'animate-lightToDark', 'bg-gray-900'];
	second: string[] = ['light', 'animate-darkToLight', 'bg-gray-50'];

	constructor(private themeSwitcher: ThemeSwitcherService, protected element: ElementRef) {

	}

	ngOnInit(): void {
		this.heroObserver = this.createObserver(0.6, this.first);
		this.newObserver = this.createObserver(0.6, this.second);
	}

	ngOnDestroy(): void {
		this.heroObserver.disconnect();
		this.newObserver.disconnect();
	}

	createObserver(threshold: number, theme: string[]): IntersectionObserver {
		return new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// animation code
						this.themeSwitcher.toggleTheme(theme);
					}
				});
			},
			{ threshold }
		);
	}

	ngAfterViewInit() {
		this.heroObserver.observe(this.heroComponent.heroSection.nativeElement);

		this.newObserver.observe(this.newComponent.newSection.nativeElement);


		this.headline = this.heroComponent.heroSection.nativeElement.querySelector('.headline');
		this.subline = this.heroComponent.heroSection.nativeElement.querySelector('.subline');
		this.sideBar = this.heroComponent.heroSection.nativeElement.querySelector('.sidebar');

		this.ring1 = this.element.nativeElement.querySelector('.ring1');
		this.ring2 = this.element.nativeElement.querySelector('.ring2');
		this.ring3 = this.element.nativeElement.querySelector('.ring3');
		this.ring4 = this.element.nativeElement.querySelector('.ring4');
		this.animateTimeline();

	}
	animateTimeline() {
		gsap.timeline()
			.from(this.headline, { duration: 1, y: 100, opacity: 0, ease: 'power4.out' })
			.from(this.subline, { duration: 1, y: 100, opacity: 0, ease: 'power3.out' }, '-=0.5')
			.from(this.ring1, { duration: 0.5, xPercent: -100, yPercent: 100, opacity: 0, ease: Back.easeOut.config(1) }, '-=1.5')
			.from(this.ring2, { duration: 0.6, xPercent: -100, yPercent: 100, opacity: 0, ease: Back.easeOut.config(2) }, '-=1.5')
			.from(this.ring3, { duration: 0.7, xPercent: -100, yPercent: 100, opacity: 0, ease: Back.easeOut.config(2) }, '-=1.5')
			.from(this.ring4, { duration: 0.8, xPercent: -100, yPercent: 100, opacity: 0, ease: Back.easeOut.config(2) }, '-=1.5')
			.from(this.sideBar, { duration: 1, xPercent: -100, opacity: 0, ease: 'power3.out' }, '-=1.5');
	}
}
