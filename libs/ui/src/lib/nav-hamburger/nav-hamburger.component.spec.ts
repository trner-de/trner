import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHamburgerComponent } from './nav-hamburger.component';

describe('NavHamburgerComponent', () => {
  let component: NavHamburgerComponent;
  let fixture: ComponentFixture<NavHamburgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavHamburgerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavHamburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
