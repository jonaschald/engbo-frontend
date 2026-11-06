import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminHold } from './admin-hold';

describe('AdminHold', () => {
  let component: AdminHold;
  let fixture: ComponentFixture<AdminHold>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminHold],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminHold);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
