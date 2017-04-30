import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuntesDeutschlandComponent } from './buntes-deutschland.component';

describe('BuntesDeutschlandComponent', () => {
  let component: BuntesDeutschlandComponent;
  let fixture: ComponentFixture<BuntesDeutschlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuntesDeutschlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuntesDeutschlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
