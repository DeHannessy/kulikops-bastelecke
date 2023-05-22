import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kulikops-bastelecke';
  navbarOpened = false;
  isAuthenticated = true;
  inputPassword = "";
  password = "Love Peace & Happiness";

  checkPassword() {
    if (this.inputPassword === this.password) {
      this.isAuthenticated = true;
      this.inputPassword = "";
    }
  }
}
