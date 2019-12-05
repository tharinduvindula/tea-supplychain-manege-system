import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneestateviewComponent } from './oneestateview.component';

describe('OneestateviewComponent', () => {
  let component: OneestateviewComponent;
  let fixture: ComponentFixture<OneestateviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneestateviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneestateviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
