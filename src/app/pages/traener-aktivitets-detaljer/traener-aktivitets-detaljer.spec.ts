import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraenerAktivitetsDetaljer } from './traener-aktivitets-detaljer';

describe('TraenerAktivitetsDetaljer', () => {
  let component: TraenerAktivitetsDetaljer;
  let fixture: ComponentFixture<TraenerAktivitetsDetaljer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TraenerAktivitetsDetaljer],
    }).compileComponents();

    fixture = TestBed.createComponent(TraenerAktivitetsDetaljer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
