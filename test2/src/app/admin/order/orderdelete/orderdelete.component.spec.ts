import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderdeleteComponent } from './orderdelete.component';

describe('OrderdeleteComponent', () => {
  let component: OrderdeleteComponent;
  let fixture: ComponentFixture<OrderdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
