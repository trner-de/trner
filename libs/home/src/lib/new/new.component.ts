import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemeSwitcherService } from '@trner/ui';

@Component({
	selector: 'trner-new',
	templateUrl: './new.component.html',
	styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit, AfterViewInit {

	@ViewChild('newElement')
	yourElement!: ElementRef;

	ngAfterViewInit() {
		const threshold = 0.3; // how much % of the element is in view
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// run your animation code here
						console.log('new in view');
						this.themeSwitcher.toggleTheme(['light', 'animate-darkToLight', 'bg-gray-50']);

						// observer.disconnect(); // disconnect if you want to stop observing else it will rerun every time its back in view. Just make sure you disconnect in ngOnDestroy instead
					}
				});
			},
			{ threshold }
		);
		observer.observe(this.yourElement.nativeElement);
	}
	ngOnInit(): void { }

	constructor(private themeSwitcher: ThemeSwitcherService) { }
}


