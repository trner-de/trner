import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemeSwitcherService } from '@trner/ui';

@Component({
	selector: 'trner-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, AfterViewInit {

	@ViewChild('heroElement')
	yourElement!: ElementRef;

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
		observer.observe(this.yourElement.nativeElement);
	}
	constructor(private themeSwitcher: ThemeSwitcherService) { }

	ngOnInit(): void { }
}
