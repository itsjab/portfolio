import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinoComponent } from './fino.component';

describe('FinoComponent', () => {
  let component: FinoComponent;
  let fixture: ComponentFixture<FinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
