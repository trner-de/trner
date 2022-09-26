import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatPageComponent } from './what-page.component';

describe('WhatPageComponent', () => {
  let component: WhatPageComponent;
  let fixture: ComponentFixture<WhatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhatPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
