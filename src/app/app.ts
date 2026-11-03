import { Component, signal } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HttpService} from '../services/http-service';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('engbo-frontend');
  private httpservice = new HttpService();

  constructor(private router: Router) {
    var t = this.httpservice.LoginUser({
      email: "jens@gmail.com",
      password: "jens123",
    })

    t.subscribe((res: ILoginResponse) => {
      console.log("Token", res.token);
      console.log("Name", res.name);
    })
  }
}
