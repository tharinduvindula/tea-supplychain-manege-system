import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagersidebarComponent } from './managersidebar.component';

describe('ManagersidebarComponent', () => {
  let component: ManagersidebarComponent;
  let fixture: ComponentFixture<ManagersidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagersidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagersidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
