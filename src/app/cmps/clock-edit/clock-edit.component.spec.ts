import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockEditComponent } from './clock-edit.component';

describe('ClockEditComponent', () => {
  let component: ClockEditComponent;
  let fixture: ComponentFixture<ClockEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
