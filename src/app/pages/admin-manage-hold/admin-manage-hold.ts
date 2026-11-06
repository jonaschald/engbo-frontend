import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-manage-hold',
  imports: [FormsModule, RouterLink],
  templateUrl: './admin-manage-hold.html',
  styleUrl: './admin-manage-hold.css',
})
export class AdminManageHold {
  teamId: number | null = null;
  isEditMode = false;

  teamName = '';
  ageGroup = '';
  coach = '';
  trainingDay = '';
  startTime = '';
  endTime = '';

  coaches = ['Mette Sørensen', 'Jakob Andersen', 'Søren Hansen'];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      const id = Number(params['id']);

      if (id) {
        this.teamId = id;
        this.isEditMode = true;
        this.loadTeam(id);
      }
    });
  }

  loadTeam(id: number) {
    const teams: any = {
      1: {
        teamName: 'U13',
        ageGroup: '13',
        coach: 'Mette Sørensen',
        trainingDay: 'Tirsdag',
        startTime: '17:00',
        endTime: '18:00',
      },
      2: {
        teamName: 'U14',
        ageGroup: '14',
        coach: 'Jakob Andersen',
        trainingDay: 'Torsdag',
        startTime: '17:00',
        endTime: '18:00',
      },
      3: {
        teamName: 'Senior',
        ageGroup: 'Senior',
        coach: 'Søren Hansen',
        trainingDay: 'Torsdag',
        startTime: '18:00',
        endTime: '19:00',
      },
    };

    const team = teams[id];

    if (team) {
      this.teamName = team.teamName;
      this.ageGroup = team.ageGroup;
      this.coach = team.coach;
      this.trainingDay = team.trainingDay;
      this.startTime = team.startTime;
      this.endTime = team.endTime;
    }
  }

  saveTeam() {
    const team = {
      id: this.teamId,
      name: this.teamName,
      ageGroup: this.ageGroup,
      coach: this.coach,
      trainingDay: this.trainingDay,
      startTime: this.startTime,
      endTime: this.endTime,
    };

    console.log('Team saved:', team);

    alert(this.isEditMode ? 'Holdet er blevet opdateret!' : 'Nyt hold er blevet oprettet!');
  }
}
