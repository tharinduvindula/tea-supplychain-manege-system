import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductprogressComponent } from './productprogress.component';

describe('ProductprogressComponent', () => {
  let component: ProductprogressComponent;
  let fixture: ComponentFixture<ProductprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
