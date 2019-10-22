import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogetPasswordComponent } from './froget-password.component';

describe('FrogetPasswordComponent', () => {
  let component: FrogetPasswordComponent;
  let fixture: ComponentFixture<FrogetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrogetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrogetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
