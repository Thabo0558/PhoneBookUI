import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { PhonebookService } from 'src/app/phonebook.service';
import { Phonebook } from 'src/app/models/phonebook';
@Component({
  selector: 'app-phonebook-editor',
  templateUrl: './phonebook-editor.component.html',
  styleUrls: ['./phonebook-editor.component.scss']
})
export class PhonebookEditorComponent implements OnInit {

  phonebook: Phonebook;
  phonebookForm: FormGroup;
  dialogTitle: string;
  constructor(public matDialogRef: MatDialogRef<PhonebookEditorComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) private dialogData: any,
              public formBuilder: FormBuilder,
              private phonebookService: PhonebookService) {
                this.formBuilder = new FormBuilder();
  }

  ngOnInit() {
    if (this.dialogData.phonebook) {
        this.dialogTitle = 'Edit Phonebook';
        this.phonebook = this.dialogData.phonebook;
      } else {
        this.dialogTitle = 'Add Phonebook';
        this.phonebook = new Phonebook();
      }
    this.phonebookForm = this.createPhonebookForm();
  }

  createPhonebookForm(): FormGroup {
    return this.formBuilder.group({
      id: new FormControl( [this.phonebook.id]),
      name: new FormControl( [this.phonebook.name], Validators.minLength(3))
    });
  }
  save() {

    this.phonebook.name = this.phonebookForm.value.name;
    if (this.phonebook.name === '') {
      return;
    }
    if (this.phonebook.id) {
      this.phonebookService.editPhonebook(this.phonebook).subscribe(phonebook => {
      });
    } else {
      this.phonebookService.addPhonebook(this.phonebook).subscribe(phonebook => {
      });
    }
  }

}
