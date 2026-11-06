import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-player-matches',
  imports: [RouterLink],
  templateUrl: './player-matches.html',
  styleUrl: './player-matches.css',
})
export class PlayerMatches {
  matchResponses: { [key: number]: string } = {};
  matchComments: { [key: number]: string } = {};

  respond(matchId: number, response: string) {
    this.matchResponses[matchId] = response;
  }

  updateComment(matchId: number, comment: string) {
    this.matchComments[matchId] = comment;
  }
}
