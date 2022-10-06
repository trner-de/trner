import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ThemeSwitcherService } from '@trner/ui';

@Component({
	selector: 'trner-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss'],
})
export class NewComponent implements AfterViewInit, OnDestroy {

	@ViewChild('newElement')
	yourElement!: ElementRef;

	observer!: IntersectionObserver;

	ngAfterViewInit() {
		const threshold = 0.3; // how much % of the element is in view
		this.observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// animation code
						this.themeSwitcher.toggleTheme(['light', 'animate-darkToLight', 'bg-gray-50']);

						// observer.disconnect(); // disconnect if you want to stop observing else it will rerun every time its back in view. Just make sure you disconnect in ngOnDestroy instead
					}
				});
			},
			{ threshold }
		);
		this.observer.observe(this.yourElement.nativeElement);
	}

	ngOnDestroy() {
		// disconnect observer here

		this.observer?.disconnect();
	}

	constructor(private themeSwitcher: ThemeSwitcherService) { }
}


