import { Component, OnInit } from '@angular/core';
import { EntryEditorComponent } from './entry-editor/entry-editor.component';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Phonebook } from '../models/phonebook';
import { PhonebookService } from '../phonebook.service';

@Component({
  selector: 'app-entry-manager',
  templateUrl: './entry-manager.component.html',
  styleUrls: ['./entry-manager.component.scss']
})
export class EntryManagerComponent implements OnInit {

  phonebookId: number;
  phonebook: Phonebook;
  constructor( private matDialog: MatDialog,
               private route: ActivatedRoute,
               private phonebookService: PhonebookService) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    this.phonebookId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.phonebookService.getPhonebook(this.phonebookId).subscribe(result => {
      this.phonebook = result;
    });

  }


  addNewEntry() {

    const dialogRef = this.matDialog.open(EntryEditorComponent,
      {
        data: {Entry: null, phonebookId: this.phonebookId},
        width: '600px'
      });

  }
}
