import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerupdateComponent } from './workerupdate.component';

describe('WorkerupdateComponent', () => {
  let component: WorkerupdateComponent;
  let fixture: ComponentFixture<WorkerupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
