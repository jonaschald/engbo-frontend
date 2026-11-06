import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';

  selectedRole: string = '';

  selectRole(role: string) {
    this.selectedRole = role;
  }

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Role:', this.selectedRole);
  }
}
