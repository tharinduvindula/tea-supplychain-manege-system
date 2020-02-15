import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneorderComponent } from './oneorder.component';

describe('OneorderComponent', () => {
  let component: OneorderComponent;
  let fixture: ComponentFixture<OneorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
