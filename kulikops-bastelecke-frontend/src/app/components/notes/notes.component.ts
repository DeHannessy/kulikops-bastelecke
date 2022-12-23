import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public notes = [["Kulikops Bastelecke Todos", "Notes\nI want to be able to make notes about anything, and add them into a list. in a topic. a topic has sub topics and sub topics and sub sub sub. you can show all notes or just certain ones.\nOthers:\nmake a Console, like on monkeytype, accessable by maybe typing slash\nMake color themes through the whole page, like in monkeytype.com"],["hi", "moin alter"], ["asödkfjaösdkjföalsjdkf", "asöldkfjasldf sldfjk asödflkj asdflkja sdölfja slökfjas lfasödfjaöjsdkfö alskdfj aöfjsdk öalfjdk asöldkfjlaöjsdkflöajsdkflö askfdlö asdf aslfdjöaljskfdlöasjdf aslfdkj aöslkjfalkfjdöalskjfd sldfjls kfdj slkfjslkfdjlskfls lfjlsdfj lskjf lskfjl sdkfjklsdfls jdflskf "], ["ljsdkfls", "alsdkföasdjf"], ["this is going to be great.", "is it tho?"], ["yep", "definitely!"]];
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
      this.notes.unshift([this.newNoteTitle, ""]);
      document.getElementById('new-note-input')?.setAttribute("placeholder", "add content");
    } else {
      this.notes[0][1] = this.newNote;
      document.getElementById('new-note-input')?.setAttribute("placeholder", "new note title");
      this.newNoteTitle = "";
    }
    this.newNote = "";
  }
}

