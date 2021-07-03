import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface IItem {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private _http: HttpClient) { }

  url = '/assets/data/items.json';

  getItems(): Observable<IItem[]> {
    // return  [
    //   {"id" : "1", "name": "test"},
    //   {"id" : "3", "name": "test3"}

    // ];
    return this._http
      .get<IItem[]>(this.url)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Server Error');
  }
}
