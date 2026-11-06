import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-statistics',
  imports: [RouterLink],
  templateUrl: './admin-statistics.html',
  styleUrl: './admin-statistics.css',
})
export class AdminStatistics {
  teams = [
    {
      id: 1,
      name: 'U13',
      coach: 'Mette Sørensen',
      players: 18,
      trainings: 12,
      matches: 5,
      attendance: 85,
    },
    {
      id: 2,
      name: 'U14',
      coach: 'Jakob Andersen',
      players: 16,
      trainings: 10,
      matches: 4,
      attendance: 78,
    },
    {
      id: 3,
      name: 'Senior',
      coach: 'Søren Hansen',
      players: 22,
      trainings: 15,
      matches: 7,
      attendance: 91,
    },
  ];
}
