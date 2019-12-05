import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkereditComponent } from './workeredit.component';

describe('WorkereditComponent', () => {
  let component: WorkereditComponent;
  let fixture: ComponentFixture<WorkereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
