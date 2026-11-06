import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraenerOpretKamp } from './traener-opret-kamp';

describe('TraenerOpretKamp', () => {
  let component: TraenerOpretKamp;
  let fixture: ComponentFixture<TraenerOpretKamp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraenerOpretKamp],
    }).compileComponents();

    fixture = TestBed.createComponent(TraenerOpretKamp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
