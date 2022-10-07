import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ThemeSwitcherService } from '@trner/ui';
import { gsap } from 'gsap';
import { HeroComponent } from '../hero/hero.component';
import { NewComponent } from '../new/new.component';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

	@ViewChild('new-Image')
	newImage!: HTMLElement;

	@ViewChild('new-Text')
	newText!: HTMLElement;

	@ViewChild('new-Solution')
	newSolution!: HTMLElement;

	@ViewChild('new-Logo')
	newLogo!: HTMLElement;

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
		this.newObserver = this.createObserver(0.2, this.second);
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

		this.newImage = this.newComponent.newSection.nativeElement.querySelector('.desk-image');
		this.newText = this.newComponent.newSection.nativeElement.querySelector('.new-text');
		this.newSolution = this.newComponent.newSection.nativeElement.querySelector('.new-solution');
		this.newLogo = this.newComponent.newSection.nativeElement.querySelector('.new-logo');

		this.animateTimeline();
		this.animateNew();

	}

	animateTimeline() {
		gsap.timeline()
			.from(this.headline, { duration: 1, y: 100, opacity: 0, ease: 'power4.out' })
			.from(this.subline, { duration: 1, y: 100, opacity: 0, ease: 'power3.out' }, '-=0.5')
		// .from(this.ring1, { duration: 1, xPercent: -100, opacity: 0, ease: 'power1.in' }, '-=1.5')
		// .from(this.ring2, { duration: 1.2, xPercent: -100, opacity: 0, ease: 'power1.in' }, '-=1.5')
		// .from(this.ring3, { duration: 1.3, xPercent: -100, opacity: 0, ease: 'power1.in' }, '-=1.5')
		// .from(this.ring4, { duration: 1.5, xPercent: -100, opacity: 0, ease: 'power1.in' }, '-=1.5')
		// .from(this.sideBar, { duration: 1, xPercent: -100, opacity: 0, ease: 'power3.out' }, '-=1.5')
	}

	animateNew() {
		gsap.from(this.newImage, {
			xPercent: -100,
			duration: 1,
			opacity: 0,
			scrollTrigger: {

				markers: true,
				trigger: this.newImage,
				start: 'top 70%',
				end: 'bottom 70%',
				toggleActions: 'play none none reverse',
			},
		})

		gsap.from(this.newText, {
			xPercent: -50,
			duration: 0.8,
			scrollTrigger: {
				trigger: this.newText,
				start: 'top 60%',
				end: 'bottom 60%',
				toggleActions: 'play none none reverse',
			},
		})

		gsap.from(this.newSolution, {
			xPercent: -100,
			duration: 0.8,
			scrollTrigger: {
				trigger: this.newSolution,
				start: 'top 70%',
				end: 'bottom 70%',
				toggleActions: 'play none none reverse',
			},
		})

		gsap.from(this.newLogo.children, {
			opacity: 0,
			xPercent: -100,
			duration: 0.8,
			stagger: 0.2,
			scrollTrigger: {
				trigger: this.newLogo,
				start: 'top 70%',
				end: 'bottom 70%',
				toggleActions: 'play none none reverse',
			},
		})

	}
}
