import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerblockComponent } from './workerblock.component';

describe('WorkerblockComponent', () => {
  let component: WorkerblockComponent;
  let fixture: ComponentFixture<WorkerblockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerblockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
