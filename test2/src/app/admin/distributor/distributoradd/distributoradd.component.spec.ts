import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributoraddComponent } from './distributoradd.component';

describe('DistributoraddComponent', () => {
  let component: DistributoraddComponent;
  let fixture: ComponentFixture<DistributoraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributoraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
