import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchipsComponent } from './schips.component';

describe('SchipsComponent', () => {
  let component: SchipsComponent;
  let fixture: ComponentFixture<SchipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
