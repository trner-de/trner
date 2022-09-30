import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemeSwitcherService } from '@trner/ui';
import { gsap } from 'gsap';

@Component({
	selector: 'trner-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {

	@ViewChild('heroSection')
	heroSection!: ElementRef;

	@ViewChild('headline')
	headline!: HTMLElement;

	@ViewChild('subline')
	subline!: HTMLElement;

	@ViewChild('sideBar')
	sideBar!: HTMLElement;

	ngAfterViewInit() {
		const threshold = 0.6; // how much % of the element is in view
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// run your animation code here
						console.log('hero in view');
						this.themeSwitcher.toggleTheme(['dark', 'animate-lightToDark', 'bg-gray-900']);
						// observer.disconnect(); // disconnect if you want to stop observing else it will rerun every time its back in view. Just make sure you disconnect in ngOnDestroy instead
					}
				});
			},
			{ threshold }
		);
		observer.observe(this.heroSection.nativeElement);
	}
	constructor(private themeSwitcher: ThemeSwitcherService, protected element: ElementRef) {


	}

	ngOnInit(): void {
		this.headline = this.element.nativeElement.querySelector('.headline');
		this.subline = this.element.nativeElement.querySelector('.subline');
		this.sideBar = this.element.nativeElement.querySelector('.sidebar');
		this.animateTimeline();
	}

	animateTimeline() {
		const tl = gsap.timeline()
			.from(this.headline, { duration: 1, y: 100, opacity: 0, ease: 'power4.out' })
			.from(this.subline, { duration: 1, y: 100, opacity: 0, ease: 'power3.out' }, '-=0.5')
			.from(this.sideBar, { duration: 2.5, yPercent: 100, opacity: 0, ease: 'expo.out' }, '-=0.5');
	}
}
