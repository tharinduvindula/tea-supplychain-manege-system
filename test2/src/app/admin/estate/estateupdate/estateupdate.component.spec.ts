import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateupdateComponent } from './estateupdate.component';

describe('EstateupdateComponent', () => {
  let component: EstateupdateComponent;
  let fixture: ComponentFixture<EstateupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
