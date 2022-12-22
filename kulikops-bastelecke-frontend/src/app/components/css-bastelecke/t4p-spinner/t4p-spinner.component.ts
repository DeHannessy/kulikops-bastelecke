import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t4p-spinner',
  templateUrl: './t4p-spinner.component.html',
  styleUrls: ['./t4p-spinner.component.css']
})
export class T4pSpinnerComponent implements OnInit {

  paths = ['/assets/css-bastelecke/t4p/T.png', '/assets/css-bastelecke/t4p/4.png', '/assets/css-bastelecke/t4p/P.png'];
  constructor() { }

  ngOnInit(): void {
    this.preload();
  }

  preload(): void {
    for (let i = 0; i < this.paths.length; ++i) {
      const img = new Image();
      img.src = this.paths[i];
   }
  }
}
