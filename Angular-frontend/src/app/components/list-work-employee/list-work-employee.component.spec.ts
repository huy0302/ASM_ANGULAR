import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkEmployeeComponent } from './list-work-employee.component';

describe('ListWorkEmployeeComponent', () => {
  let component: ListWorkEmployeeComponent;
  let fixture: ComponentFixture<ListWorkEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWorkEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWorkEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
