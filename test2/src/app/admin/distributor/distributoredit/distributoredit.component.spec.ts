import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributoreditComponent } from './distributoredit.component';

describe('DistributoreditComponent', () => {
  let component: DistributoreditComponent;
  let fixture: ComponentFixture<DistributoreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributoreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributoreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
