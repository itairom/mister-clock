import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockAppComponent } from './clock-app.component';

describe('ClockAppComponent', () => {
  let component: ClockAppComponent;
  let fixture: ComponentFixture<ClockAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
