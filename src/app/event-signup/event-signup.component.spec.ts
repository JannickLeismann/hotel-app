import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSignupComponent } from './event-signup.component';

describe('EventSignupComponent', () => {
  let component: EventSignupComponent;
  let fixture: ComponentFixture<EventSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
