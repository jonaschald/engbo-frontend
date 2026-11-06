import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Match {
  id: number;
  team: string;
  opponent: string;
  date: string;
  time: string;
  location: string;
}

@Component({
  selector: 'app-traener-kampe',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './traener-kampe.html',
  styleUrl: './traener-kampe.css',
})
export class TraenerKampe implements OnInit {
  matches: Match[] = [];

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches(): void {
    const savedMatches = localStorage.getItem('trainerMatches');

    this.matches = savedMatches ? JSON.parse(savedMatches) : [];
  }

  deleteMatch(id: number): void {
    this.matches = this.matches.filter((match) => match.id !== id);

    localStorage.setItem('trainerMatches', JSON.stringify(this.matches));
  }
}
