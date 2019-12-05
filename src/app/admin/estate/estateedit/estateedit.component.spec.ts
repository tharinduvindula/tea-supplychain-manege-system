import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateeditComponent } from './estateedit.component';

describe('EstateeditComponent', () => {
  let component: EstateeditComponent;
  let fixture: ComponentFixture<EstateeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
