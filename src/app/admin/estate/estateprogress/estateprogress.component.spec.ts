import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstateprogressComponent } from './estateprogress.component';

describe('EstateprogressComponent', () => {
  let component: EstateprogressComponent;
  let fixture: ComponentFixture<EstateprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstateprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstateprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
