import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerviewComponent } from './workerview.component';

describe('WorkerviewComponent', () => {
  let component: WorkerviewComponent;
  let fixture: ComponentFixture<WorkerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
