import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorupdateComponent } from './distributorupdate.component';

describe('DistributorupdateComponent', () => {
  let component: DistributorupdateComponent;
  let fixture: ComponentFixture<DistributorupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
