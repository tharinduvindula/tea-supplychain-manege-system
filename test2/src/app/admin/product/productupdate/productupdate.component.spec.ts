import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductupdateComponent } from './productupdate.component';

describe('ProductupdateComponent', () => {
  let component: ProductupdateComponent;
  let fixture: ComponentFixture<ProductupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
