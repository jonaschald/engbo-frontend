import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Training {
  id: number;
  team: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

@Component({
  selector: 'app-traener-traeninger',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './traener-traeninger.html',
  styleUrl: './traener-traeninger.css',
})
export class TraenerTraeninger implements OnInit {

  trainings: Training[] = [];

  ngOnInit(): void {
    this.loadTrainings();
  }

  loadTrainings(): void {
    const savedTrainings = localStorage.getItem('trainerTrainings');

    this.trainings = savedTrainings
      ? JSON.parse(savedTrainings)
      : [];
  }

  deleteTraining(id: number): void {
    this.trainings = this.trainings.filter(
      training => training.id !== id
    );

    localStorage.setItem(
      'trainerTrainings',
      JSON.stringify(this.trainings)
    );
  }
}
