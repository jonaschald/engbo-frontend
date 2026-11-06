import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface Activity {
  id: number;
  team: string;
  date: string;
  time: string;
  location: string;
  type?: string;
  opponent?: string;
}

@Component({
  selector: 'app-traener-aktivitets-detaljer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './traener-aktivitets-detaljer.html',
  styleUrl: './traener-aktivitets-detaljer.css',
})
export class TraenerAktivitetsDetaljer implements OnInit {

  activity: Activity | null = null;
  activityType = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = Number(params['id']);
      this.activityType = params['type'] || '';

      this.loadActivity(id);
    });
  }

  loadActivity(id: number): void {
    const storageKey =
      this.activityType === 'kamp'
        ? 'trainerMatches'
        : 'trainerTrainings';

    const savedActivities = JSON.parse(
      localStorage.getItem(storageKey) || '[]'
    ) as Activity[];

    this.activity =
      savedActivities.find(item => item.id === id) || null;
  }
}
