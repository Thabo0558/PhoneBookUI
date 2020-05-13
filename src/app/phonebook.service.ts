import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Phonebook } from './models/phonebook';
import { Entry } from './models/entry';

@Injectable({
  providedIn: 'root'
})
export class PhonebookService {
  [x: string]: any;

  basePhonebookAPIUrl =  environment.phoneBookAPILocalUrl;
  constructor(private httpClient: HttpClient) { }


  getPhonebookList(): Observable<Phonebook[]> {
    const httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');
    const options = {
        headers: httpHeaders
      };
    return this.httpClient.get<Phonebook[]>(this.basePhonebookAPIUrl + '/Phonebook');
  }
  getEntryList(): Observable<Entry[]>  {
    return this.httpClient.get<Entry[]>(this.basePhonebookAPIUrl + '/entry');
  }
  getPhonebook(id: number): Observable<any>  {
    return this.httpClient.get<any>(this.basePhonebookAPIUrl + '/Phonebook/' + id);
  }
  getEntry(id: number): Observable<any>  {
    return this.httpClient.get<any>(this.basePhonebookAPIUrl + '/entry/' + id);
  }
  addPhonebook(phonebook: Phonebook): Observable<Phonebook>  {
    return this.httpClient.post<Phonebook>(this.basePhonebookAPIUrl + '/Phonebook', phonebook);
  }
  addEntry(entry: Entry): Observable<Entry>  {
    return this.httpClient.post<Entry>(this.basePhonebookAPIUrl + '/entry', entry);
  }
  editPhonebook(phonebook: Phonebook): Observable<any>  {
    return this.httpClient.put<any>(this.basePhonebookAPIUrl + '/phonebook/' + phonebook.id, phonebook);
  }
  editEntry(entry: Entry): Observable<any>  {
    return this.httpClient.put<any>(this.basePhonebookAPIUrl + '/entry/' + entry.phoneBookId, entry);
  }
  deletePhonebook(id: number): Observable<any>  {
    return this.httpClient.delete<any>(this.basePhonebookAPIUrl + '/phonebook/' + id);
  }
  deleteEntry(id: number): Observable<any>  {
    return this.httpClient.delete<any>(this.basePhonebookAPIUrl + '/entry/' + id);
  }

}
