import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-king-of-thieves',
  templateUrl: './king-of-thieves.component.html',
  styleUrls: ['./king-of-thieves.component.css']
})
export class KingOfThievesComponent implements OnInit {
  public isAntiyGravity = false;
  public blocks: boolean[][] = [];

  constructor() { }

  ngOnInit(): void {
    for(var i = 0; i < 4; i++) {
      for(var j = 0; j < 7; j++) {
        this.blocks[i][j] = false;
      }
    }
  }

  onBlockClick(block: any) {
    console.log("clicked");
    if (block.style.background == "black") {
      block.style.background = "white";
      block.style.borderColor = "black";
    } else {
      block.style.background = "black";
      block.style.borderColor = "white";
    }
    if (this.isAntiyGravity) {
      block.style.backgroundImage = "url('data:image/png;base64,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')";
      block.style.backgroundSize = "40px, 40px";
      this.isAntiyGravity = false;
      //document.getElementById('antigravity').checked = false;
    }
  }

  ag(block: any) {
    block.style.backgroundImage = "url('data:image/png;base64,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')";
    block.style.backgroundSize = "40px, 40px";
  }

  selectAg() {
    this.isAntiyGravity = !this.isAntiyGravity;
  }
}
