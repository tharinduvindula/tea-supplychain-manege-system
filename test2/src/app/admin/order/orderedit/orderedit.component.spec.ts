import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdereditComponent } from './orderedit.component';

describe('OrdereditComponent', () => {
  let component: OrdereditComponent;
  let fixture: ComponentFixture<OrdereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
