import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorblockComponent } from './distributorblock.component';

describe('DistributorblockComponent', () => {
  let component: DistributorblockComponent;
  let fixture: ComponentFixture<DistributorblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
