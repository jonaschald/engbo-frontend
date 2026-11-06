import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraenerOpretTraening } from './traener-opret-traening';

describe('TraenerOpretTraening', () => {
  let component: TraenerOpretTraening;
  let fixture: ComponentFixture<TraenerOpretTraening>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraenerOpretTraening],
    }).compileComponents();

    fixture = TestBed.createComponent(TraenerOpretTraening);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
