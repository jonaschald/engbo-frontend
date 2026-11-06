import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-hold',
  imports: [RouterLink],
  templateUrl: './admin-hold.html',
  styleUrl: './admin-hold.css',
})
export class AdminHold {

  teams = [
    {
      id: 1,
      name: 'U13',
      year: '13',
      coach: 'Mette Sørensen',
      day: 'Tirsdag',
      time: '17:00 - 18:00'
    },
    {
      id: 2,
      name: 'U14',
      year: '14',
      coach: 'Jakob Andersen',
      day: 'Torsdag',
      time: '17:00 - 18:00'
    },
    {
      id: 3,
      name: 'Senior',
      year: 'Senior',
      coach: 'Søren Hansen',
      day: 'Torsdag',
      time: '18:00 - 19:00'
    }
  ];

}
