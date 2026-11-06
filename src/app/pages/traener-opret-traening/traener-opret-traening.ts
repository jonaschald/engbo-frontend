import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-traener-opret-traening',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './traener-opret-traening.html',
  styleUrl: './traener-opret-traening.css',
})
export class TraenerOpretTraening {
  training = {
    team: 'U13',
    date: '',
    time: '',
    location: '',
    type: 'Træning',
  };

  teams = ['U13', 'U17', 'Senior'];

  saveTraining(): void {
    const savedTrainings = JSON.parse(localStorage.getItem('trainerTrainings') || '[]');

    savedTrainings.push({
      id: Date.now(),
      ...this.training,
    });

    localStorage.setItem('trainerTrainings', JSON.stringify(savedTrainings));

    alert('Træningen er gemt!');
  }
}
