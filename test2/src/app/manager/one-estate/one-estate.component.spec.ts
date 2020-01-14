import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneEstateComponent } from './one-estate.component';

describe('OneEstateComponent', () => {
  let component: OneEstateComponent;
  let fixture: ComponentFixture<OneEstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneEstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
