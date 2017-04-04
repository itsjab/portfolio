import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialRideComponent } from './social-ride.component';

describe('SocialRideComponent', () => {
  let component: SocialRideComponent;
  let fixture: ComponentFixture<SocialRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
