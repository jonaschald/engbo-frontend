
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Player {
  id: number;
  name: string;
  team: string;
  present: boolean;
}

interface Training {
  id: number;
  team: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

@Component({
  selector: 'app-traener-fremmoede',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './traener-fremmoede.html',
  styleUrl: './traener-fremmoede.css',
})
export class TraenerFremmoede implements OnInit {

  teams = ['U13', 'U17', 'Senior'];

  selectedTeam = 'U13';
  selectedDate = '';
  selectedTrainingId = '';

  newPlayerName = '';

  players: Player[] = [];
  trainings: Training[] = [];

  attendanceByTraining: { [key: string]: number[] } = {};

  savedMessage = '';

  ngOnInit(): void {
    this.loadPlayers();
    this.loadTrainings();
    this.loadSavedAttendance();
  }

  // Indlæs spillere
  loadPlayers(): void {
    const saved = localStorage.getItem('trainerAttendance');

    if (saved) {
      this.players = JSON.parse(saved);
    }
  }

  // Indlæs træninger
  loadTrainings(): void {
    const saved = localStorage.getItem('trainerTrainings');

    this.trainings = saved ? JSON.parse(saved) : [];
  }

  // Indlæs gemt fremmøde
  loadSavedAttendance(): void {
    const saved = localStorage.getItem('trainerAttendanceByTraining');

    if (saved) {
      this.attendanceByTraining = JSON.parse(saved);
    }
  }

  // Vælg træning
  onTrainingChange(): void {
    const training = this.trainings.find(
      item => item.id === Number(this.selectedTrainingId)
    );

    if (!training) {
      this.selectedDate = '';
      this.updatePlayerAttendance();
      return;
    }

    this.selectedTeam = training.team;
    this.selectedDate = training.date;

    this.updatePlayerAttendance();
    this.savedMessage = '';
  }

  // Ændr dato manuelt
  onDateChange(): void {
    this.selectedTrainingId = '';
    this.updatePlayerAttendance();
    this.savedMessage = '';
  }

  // Find den aktuelle fremmødenøgle
  getAttendanceKey(): string {
    if (this.selectedTrainingId) {
      return `training-${this.selectedTrainingId}`;
    }

    return `manual-${this.selectedTeam}-${this.selectedDate}`;
  }

  // Opdater spillernes fremmøde
  updatePlayerAttendance(): void {
    const attendanceKey = this.getAttendanceKey();
    const savedPlayerIds =
      this.attendanceByTraining[attendanceKey] || [];

    this.players.forEach(player => {
      player.present =
        player.team === this.selectedTeam &&
        savedPlayerIds.includes(player.id);
    });
  }

  // Tilføj spiller
  addPlayer(): void {
    const name = this.newPlayerName.trim();

    if (!name) {
      return;
    }

    const exists = this.players.some(
      player =>
        player.name.toLowerCase() === name.toLowerCase() &&
        player.team === this.selectedTeam
    );

    if (exists) {
      this.savedMessage = 'Spilleren findes allerede på holdet.';
      return;
    }

    this.players.push({
      id: Date.now(),
      name,
      team: this.selectedTeam,
      present: false,
    });

    this.newPlayerName = '';
    this.savedMessage = '';

    this.savePlayers();
  }

  // Fjern spiller
  removePlayer(id: number): void {
    this.players = this.players.filter(player => player.id !== id);

    Object.keys(this.attendanceByTraining).forEach(trainingId => {
      this.attendanceByTraining[trainingId] =
        this.attendanceByTraining[trainingId].filter(
          playerId => playerId !== id
        );
    });

    this.savePlayers();
    this.saveAttendanceData();
  }

  // Gem fremmøde
  saveAttendance(): void {
    if (!this.selectedDate) {
      this.savedMessage = 'Vælg eller indtast først en dato.';
      return;
    }

    const presentPlayerIds = this.filteredPlayers
      .filter(player => player.present)
      .map(player => player.id);

    const attendanceKey = this.getAttendanceKey();

    this.attendanceByTraining[attendanceKey] = presentPlayerIds;

    this.saveAttendanceData();

    this.savedMessage = 'Fremmødet er gemt!';
  }

  // Gem spillere
  savePlayers(): void {
    localStorage.setItem(
      'trainerAttendance',
      JSON.stringify(this.players)
    );
  }

  // Gem fremmødedata
  saveAttendanceData(): void {
    localStorage.setItem(
      'trainerAttendanceByTraining',
      JSON.stringify(this.attendanceByTraining)
    );
  }

  // Filtrer spillere efter hold
  get filteredPlayers(): Player[] {
    return this.players.filter(
      player => player.team === this.selectedTeam
    );
  }
}
