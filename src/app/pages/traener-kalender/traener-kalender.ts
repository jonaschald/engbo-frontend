
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface CalendarActivity {
  id: number;
  type: 'traening' | 'kamp';
  team: string;
  date: string;
  time: string;
  location: string;
  opponent?: string;
}

interface Training {
  id: number;
  team: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

interface Match {
  id: number;
  team: string;
  opponent: string;
  date: string;
  time: string;
  location: string;
}

@Component({
  selector: 'app-traener-kalender',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './traener-kalender.html',
  styleUrl: './traener-kalender.css',
})
export class TraenerKalender implements OnInit {

  activities: CalendarActivity[] = [];

  currentDate = new Date();
  selectedDate = '';

  ngOnInit(): void {
    this.loadActivities();
  }

  // Indlæs træninger og kampe
  loadActivities(): void {
    const savedTrainings = JSON.parse(
      localStorage.getItem('trainerTrainings') || '[]'
    ) as Training[];

    const savedMatches = JSON.parse(
      localStorage.getItem('trainerMatches') || '[]'
    ) as Match[];

    const trainings: CalendarActivity[] = savedTrainings.map(training => ({
      id: training.id,
      type: 'traening',
      team: training.team,
      date: training.date,
      time: training.time,
      location: training.location,
    }));

    const matches: CalendarActivity[] = savedMatches.map(match => ({
      id: match.id,
      type: 'kamp',
      team: match.team,
      opponent: match.opponent,
      date: match.date,
      time: match.time,
      location: match.location,
    }));

    this.activities = [...trainings, ...matches];
  }

  // Gå til forrige måned
  previousMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.selectedDate = '';
  }

  // Gå til næste måned
  nextMonth(): void {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.selectedDate = '';
  }

  // Vis månedens navn
  get monthName(): string {
    return new Intl.DateTimeFormat('da-DK', {
      month: 'long',
      year: 'numeric',
    }).format(this.currentDate);
  }

  // Opret kalenderens dage
  get calendarDays(): (Date | null)[] {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const mondayFirstDay = (firstDay + 6) % 7;

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: (Date | null)[] = [];

    for (let i = 0; i < mondayFirstDay; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  }

  // Hent aktiviteter for en bestemt dag
  getActivitiesForDay(date: Date): CalendarActivity[] {
    const dateString = this.formatDate(date);

    return this.activities.filter(activity =>
      activity.date === dateString
    );
  }

  // Formater dato
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  // Vælg dato
  selectDate(date: Date): void {
    this.selectedDate = this.formatDate(date);
  }

  // Hent aktiviteter for den valgte dato
  get selectedActivities(): CalendarActivity[] {
    return this.activities.filter(
      activity => activity.date === this.selectedDate
    );
  }

  // Åbn aktivitetens detaljer
  getActivityLink(activity: CalendarActivity): string {
    return '/traener-aktivitets-detaljer';
  }

  // Vis aktivitetstype
  getActivityType(type: string): string {
    return type === 'kamp' ? 'Kamp' : 'Træning';
  }
}
