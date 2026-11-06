import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-player-trainings',
  imports: [RouterLink],
  templateUrl: './player-trainings.html',
  styleUrl: './player-trainings.css',
})
export class PlayerTrainings {
  trainingResponses: { [key: number]: string } = {};
  trainingComments: { [key: number]: string } = {};

  respond(trainingId: number, response: string) {
    this.trainingResponses[trainingId] = response;
  }

  updateComment(trainingId: number, comment: string) {
    this.trainingComments[trainingId] = comment;
  }
}
