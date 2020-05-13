import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Entry } from 'src/app/models/entry';
import { PhonebookService } from 'src/app/phonebook.service';
import { EntryEditorComponent } from '../entry-editor/entry-editor.component';
import { DeleteConfirmationDialogComponent } from 'src/app/dialogs/delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss'],
})
export class EntryListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Input() phonebookId: number;
  entryData: any;

  displayedColumns = ['id', 'name', 'number', 'manage'];

  dataSource: MatTableDataSource<Entry>;

  entries: Entry[]; /*  = [{id: 1, name: 'client 01', phoneNumber: '087 1234 567', phonebookId: 1},
                      {id: 2, name: 'client 02', phoneNumber: '087 1234 567', phonebookId: 8},
                      {id: 3, name: 'client 03', phoneNumber: '087 1234 567', phonebookId: 10}]; */
  constructor(private matDialog: MatDialog,
              private phonebookService: PhonebookService) {

                this.dataSource = new MatTableDataSource<Entry>();
              }

  ngOnInit() {

    this.phonebookService.getEntryList().subscribe(results => {
      this.entryData = results;
      this.entries = this.entryData.entries.filter(x => x.phoneBookId === this.phonebookId);
      this.dataSource.data = this.entries;
    });

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editEntry(entry: Entry) {
    const dialogRef = this.matDialog.open(EntryEditorComponent, {
      panelClass: 'app-phonebook-editor',
      width: '500px',
      data: {entry, phonebookId: this.phonebookId}
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) { }
    });

  }

  deleteEntry(entry: Entry) {
    const dialogRef = this.matDialog.open(DeleteConfirmationDialogComponent, {
      width: '250px',
      data: {phonebook: null, entry}
    });

    dialogRef.afterClosed().subscribe(result => {
    });

  }


}
