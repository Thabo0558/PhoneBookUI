import { Component, OnInit, ViewChild, AfterViewInit,  Inject, Optional, ViewEncapsulation } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Phonebook } from 'src/app/models/phonebook';
import { PhonebookService } from 'src/app/phonebook.service';
import { PhonebookEditorComponent } from '../phonebook-editor/phonebook-editor.component';
import { DeleteConfirmationDialogComponent } from 'src/app/dialogs/delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-phonebook-list',
  templateUrl: './phonebook-list.component.html',
  styleUrls: ['./phonebook-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PhonebookListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  phonebookData: any;
  phonebooks: Phonebook[] = [{ id: 1, name: 'Private Clients'},
                              { id: 2, name: 'Gold Clients'},
                                { id: 3, name: 'Platinum Clients'}];
  displayedColumns = ['id', 'phonebookname', 'entries', 'manage'];

  dataSource: MatTableDataSource<Phonebook>;

  phonebook: Phonebook;
  constructor(private matDialog: MatDialog,
              private phonebookService: PhonebookService) {
                this.dataSource = new MatTableDataSource<Phonebook>();

              }

  ngOnInit() {

   // this.dataSource.data = this.phonebooks;
    this.phonebookService.getPhonebookList().subscribe(results => {
        this.phonebookData = results;
        this.phonebooks = this.phonebookData.phonebooks;
        this.dataSource.data = this.phonebookData.phonebooks;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  viewPhonebookDetail() { }

  viewPhonebookEditor() {
    const dialogRef = this.matDialog.open(PhonebookEditorComponent, {
      panelClass: 'app-phonebook-editor',
      width: '500px',
      data: {phonebook: this.phonebook}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) { }
    });
  }

  editPhonebook(phonebook: Phonebook) {
    const dialogRef = this.matDialog.open(PhonebookEditorComponent, {
      panelClass: 'app-phonebook-editor',
      width: '500px',
      data: {phonebook}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) { }
    });

  }

  deletePhonebook(phonebook: Phonebook) {
    const dialogRef = this.matDialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: {phonebook, entry: null}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  applyFilterCard(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
