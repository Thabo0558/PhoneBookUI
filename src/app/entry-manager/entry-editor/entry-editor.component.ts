import { Component, OnInit, Inject, Optional, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PhonebookService } from 'src/app/phonebook.service';
import { Entry } from 'src/app/models/entry';

@Component({
  selector: 'app-entry-editor',
  templateUrl: './entry-editor.component.html',
  styleUrls: ['./entry-editor.component.scss']
})
export class EntryEditorComponent implements OnInit {
  dialogTitle: string;
  entry: Entry;
  phonebookEntryForm: FormGroup;
  phonebookId: number;


  constructor(private matDialog: MatDialog,
              public matDialogRef: MatDialogRef<EntryEditorComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) private dialogData: any,
              private formBuilder: FormBuilder,
              private phonebookService: PhonebookService) {
    this.dialogTitle = 'Add PhonebookEntry';
  }

  ngOnInit() {

    this.phonebookId = this.dialogData.phonebookId;
    if (this.dialogData.entry) {
      this.entry = this.dialogData.entry;
    } else {
      this.entry = new Entry();
    }
    this.phonebookEntryForm = this.createPhonebookEntryForm();
  }


  createPhonebookEntryForm(): FormGroup {
    return this.formBuilder.group({
      id: [this.entry.id],
      name: [this.entry.name],
      number: [this.entry.phoneNumber],
      phonebookId : [this.entry.phoneBookId]
    });
  }

  save() {

   /*  if (this.entry.id === undefined) {
      return;
    } */
    if (this.entry.name === '') {
    return;
    }

    this.entry.name = this.phonebookEntryForm.value.name;
    this.entry.phoneNumber = this.phonebookEntryForm.value.number;
    this.entry.phoneBookId = this.phonebookId;

    if (this.entry.id) {
      this.phonebookService.editEntry(this.entry).subscribe(entry => {
      });
    } else {
      this.phonebookService.addEntry(this.entry).subscribe(entry => {
      });
    }
  }




}
