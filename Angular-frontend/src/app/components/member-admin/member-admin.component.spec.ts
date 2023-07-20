import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAdminComponent } from './member-admin.component';

describe('MemberAdminComponent', () => {
  let component: MemberAdminComponent;
  let fixture: ComponentFixture<MemberAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
