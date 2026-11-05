import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminTeamStatistics } from './admin-team-statistics';

describe('AdminTeamStatistics', () => {
  let component: AdminTeamStatistics;
  let fixture: ComponentFixture<AdminTeamStatistics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTeamStatistics],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTeamStatistics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
