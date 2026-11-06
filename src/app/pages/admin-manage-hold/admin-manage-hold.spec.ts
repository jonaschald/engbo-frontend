import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminManageHold } from './admin-manage-hold';

describe('AdminManageHold', () => {
  let component: AdminManageHold;
  let fixture: ComponentFixture<AdminManageHold>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManageHold],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminManageHold);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
