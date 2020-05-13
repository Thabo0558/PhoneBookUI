import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Phonebook } from 'src/app/models/phonebook';
import { Entry } from 'src/app/models/entry';

@Component({
  selector: 'app-delete-confirmation-dialog',
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrls: ['./delete-confirmation-dialog.component.scss']
})
export class DeleteConfirmationDialogComponent implements OnInit {
  deleted: boolean;
  phonebook: Phonebook;
  entry: Entry;

  constructor( public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

    if (this.data.phonebook) {
      this.phonebook = this.data.phonebook;
    }

    if (this.data.entry) {
      this.entry = this.data.entry;
    }

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
