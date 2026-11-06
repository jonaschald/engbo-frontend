import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraenerKalender } from './traener-kalender';

describe('TraenerKalender', () => {
  let component: TraenerKalender;
  let fixture: ComponentFixture<TraenerKalender>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraenerKalender],
    }).compileComponents();

    fixture = TestBed.createComponent(TraenerKalender);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
