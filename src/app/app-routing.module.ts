import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonebookComponent } from './phonebook/phonebook.component';
import { EntryListComponent } from './entry-manager/entry-list/entry-list.component';
import { EntryManagerComponent } from './entry-manager/entry-manager.component';


const routes: Routes = [
  { path: '', redirectTo: 'phonebook', pathMatch: 'full' },
  { path: 'phonebook', component: PhonebookComponent},
  { path: 'phonebookEntries/:id', component: EntryManagerComponent,
    children: [
      { path: '', redirectTo: 'entries',  pathMatch: 'full'},
      { path: 'entries/:id',  component: EntryListComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
