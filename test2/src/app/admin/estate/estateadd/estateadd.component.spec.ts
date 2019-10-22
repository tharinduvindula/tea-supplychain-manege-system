import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateaddComponent } from './estateadd.component';

describe('EstateaddComponent', () => {
  let component: EstateaddComponent;
  let fixture: ComponentFixture<EstateaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
