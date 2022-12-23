import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public notes = [["hi", "moin alter"], ["asödkfjaösdkjföalsjdkf", "asöldkfjasldf sldfjk asödflkj asdflkja sdölfja slökfjas lfasödfjaöjsdkfö alskdfj aöfjsdk öalfjdk asöldkfjlaöjsdkflöajsdkflö askfdlö asdf aslfdjöaljskfdlöasjdf aslfdkj aöslkjfalkfjdöalskjfd sldfjls kfdj slkfjslkfdjlskfls lfjlsdfj lskjf lskfjl sdkfjklsdfls jdflskf "], ["ljsdkfls", "alsdkföasdjf"], ["this is going to be great.", "is it tho?"], ["yep", "definitely!"]];
  public newNote = "";
  public newNoteTitle = "";
  public searchQuery = "";
  constructor() { }

  ngOnInit(): void {
    document.getElementsByTagName('body')[0].setAttribute("class", "theme-wavez");
  }

  addNewNote() {
    if (!this.newNoteTitle) {
      this.newNoteTitle = this.newNote;
      this.notes.push([this.newNoteTitle, ""]);
      document.getElementById('new-note-input')?.setAttribute("placeholder", "add content");
    } else {
      this.notes[this.notes.length - 1][1] = this.newNote;
      document.getElementById('new-note-input')?.setAttribute("placeholder", "new note title");
    }
    this.newNote = "";
  }
}

