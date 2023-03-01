/**
 * Database operations for table tournaments
 */

import { Tournament } from './../model/tournament';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  REST_API: string = 'http://localhost:3000/';

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) { }


  // Get Tournaments
  GetTournaments(): Observable<Tournament> {
    return this.httpClient.get<Tournament>(`${this.REST_API}tournament`);
  }

  // Get single tournament
  GetTournament(id:any): Observable<any> {
    let API_URL = `${this.REST_API}read-tournament/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }


  // Add Tournament
  AddTournament(data:any): Observable<any> {
    
    let API_URL = `${this.REST_API}tournament-add`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }

  //Update Tournament
  updateTournament(id:any, name:any, date:any): Observable<any> {
    let data = {
      id: id,
      name: name,
      date: date,
    }

    let API_URL = `${this.REST_API}tournament-update/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }


  // Delete Tournament
  deleteTournament(id:any): Observable<any> {
    let API_URL = `${this.REST_API}delete-tournament/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
    )
  }

  // Error
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    return throwError(errorMessage);
  }
}
