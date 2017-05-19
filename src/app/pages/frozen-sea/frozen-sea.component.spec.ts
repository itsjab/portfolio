import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenSeaComponent } from './frozen-sea.component';

describe('FrozenSeaComponent', () => {
  let component: FrozenSeaComponent;
  let fixture: ComponentFixture<FrozenSeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrozenSeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
