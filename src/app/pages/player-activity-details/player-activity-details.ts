
import { Component } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-player-activity-details',
  imports: [RouterLink, FormsModule],
  templateUrl: './player-activity-details.html',
  styleUrl: './player-activity-details.css',
})
export class PlayerActivityDetails {

  type = '';
  opponent = '';
  date = '';
  time = '';
  team = '';
  location = '';
  address = '';
  duration = '';

  selectedResponse: string = '';
  comment: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.type = params['type'] || '';
      this.opponent = params['opponent'] || '';
      this.date = params['date'] || '';
      this.time = params['time'] || '';
      this.team = params['team'] || '';
      this.location = params['location'] || '';
      this.address = params['address'] || '';
      this.duration = params['duration'] || '';
    });
  }

  selectResponse(response: string) {
    this.selectedResponse = response;
  }

  saveResponse() {
    console.log('Response:', this.selectedResponse);
    console.log('Comment:', this.comment);
  }
}
