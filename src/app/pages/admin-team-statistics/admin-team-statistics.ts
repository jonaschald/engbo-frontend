import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-team-statistics',
  imports: [RouterLink, FormsModule],
  templateUrl: './admin-team-statistics.html',
  styleUrl: './admin-team-statistics.css',
})
export class AdminTeamStatistics {
  teamId = 1;
  teamName = 'U13';

  coach = 'Mette Sørensen';
  totalPlayers = 18;

  selectedPeriod = 'month';
  selectedActivity = 'all';

  statistics = [
    {
      date: '03/11/2026',
      activity: 'Træning',
      present: 15,
      absent: 3,
    },
    {
      date: '05/11/2026',
      activity: 'Træning',
      present: 16,
      absent: 2,
    },
    {
      date: '08/11/2026',
      activity: 'Kamp',
      present: 14,
      absent: 4,
    },
    {
      date: '10/11/2026',
      activity: 'Træning',
      present: 17,
      absent: 1,
    },
    {
      date: '15/11/2026',
      activity: 'Kamp',
      present: 15,
      absent: 3,
    },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      this.teamId = Number(params['id']) || 1;
      this.teamName = params['name'] || 'U13';
    });
  }

  get filteredStatistics() {
    let result = this.statistics;

    if (this.selectedActivity !== 'all') {
      result = result.filter((item) => item.activity === this.selectedActivity);
    }

    if (this.selectedPeriod === 'week') {
      result = result.slice(-2);
    }

    return result;
  }

  get totalPresent() {
    return this.filteredStatistics.reduce((sum, item) => sum + item.present, 0);
  }

  get totalAbsent() {
    return this.filteredStatistics.reduce((sum, item) => sum + item.absent, 0);
  }

  get attendancePercentage() {
    const total = this.totalPresent + this.totalAbsent;

    if (total === 0) {
      return 0;
    }

    return Math.round((this.totalPresent / total) * 100);
  }

  get averagePresent() {
    if (this.filteredStatistics.length === 0) {
      return 0;
    }

    return Math.round(this.totalPresent / this.filteredStatistics.length);
  }
}
