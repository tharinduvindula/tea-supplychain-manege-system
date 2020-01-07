import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorprogressComponent } from './distributorprogress.component';

describe('DistributorprogressComponent', () => {
  let component: DistributorprogressComponent;
  let fixture: ComponentFixture<DistributorprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
