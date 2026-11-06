import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Aktivitet } from '../../../models/aktivitet';

@Component({
  selector: 'app-player-home',
  imports: [RouterLink, DatePipe],
  templateUrl: './player-home.html',
  styleUrl: './player-home.css',
})
export class PlayerHome {
  aktiviteter = signal<Aktivitet[]>([]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Aktivitet[]>('http://localhost:5062/api/Aktiviteter').subscribe((aktiviteter) => {
      this.aktiviteter.set(aktiviteter);
      console.log(this.aktiviteter);
    });
  }
}
