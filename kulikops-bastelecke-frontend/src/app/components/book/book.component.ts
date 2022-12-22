import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public showThoughts = true;
  public showPrivateStuff = false;
  public isAuthenticated = false;
  public password = "Love Peace & Happiness";
  public inputPassword = "";

  constructor() { }

  ngOnInit(): void {
  }

  public checkPassword() {
    this.isAuthenticated = this.inputPassword === this.password;
  }
}
