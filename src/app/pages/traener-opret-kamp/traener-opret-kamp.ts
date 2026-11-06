import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-traener-opret-kamp',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './traener-opret-kamp.html',
  styleUrl: './traener-opret-kamp.css',
})
export class TraenerOpretKamp {
  match = {
    team: 'U13',
    opponent: '',
    date: '',
    time: '',
    location: '',
  };

  teams = ['U13', 'U17', 'Senior'];

  saveMatch(): void {
    const savedMatches = JSON.parse(localStorage.getItem('trainerMatches') || '[]');

    savedMatches.push({
      id: Date.now(),
      ...this.match,
    });

    localStorage.setItem('trainerMatches', JSON.stringify(savedMatches));

    alert('Kampen er gemt!');
  }
}
