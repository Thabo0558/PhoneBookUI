import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatDialog } from '@angular/material';
import { PhonebookEditorComponent } from './phonebook-editor/phonebook-editor.component';
import { Phonebook } from '../models/phonebook';


@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.scss']
})
export class PhonebookComponent implements OnInit {

  constructor( private matDialog: MatDialog) { }

  ngOnInit() {
  }

  addPhonebook() {
    const phonebook = new Phonebook();
    const dialogRef = this.matDialog.open(PhonebookEditorComponent,
      {
        data: { phonebook },
        width: '600px'
      });
  }


}
