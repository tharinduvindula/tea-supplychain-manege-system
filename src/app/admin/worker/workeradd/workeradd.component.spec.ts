import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkeraddComponent } from './workeradd.component';

describe('WorkeraddComponent', () => {
  let component: WorkeraddComponent;
  let fixture: ComponentFixture<WorkeraddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkeraddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkeraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
