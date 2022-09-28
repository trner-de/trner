import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ThemeSwitcherService {
	constructor(@Inject(DOCUMENT) private document: Document) {
	}
	currenttheme: string[] = []
	toggleTheme(theme: string[]) {
		if (this.currenttheme) {
			this.currenttheme.forEach((item) => {
				this.document.documentElement.classList.remove(item);
			});
		}
		this.currenttheme = theme;

		theme.forEach((item) => {
			this.document.documentElement.classList.add(item);
		});
	}

}
