import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMennuListItemComponent } from './nav-mennu-list-item.component';

describe('NavMennuListItemComponent', () => {
  let component: NavMennuListItemComponent;
  let fixture: ComponentFixture<NavMennuListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavMennuListItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavMennuListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
