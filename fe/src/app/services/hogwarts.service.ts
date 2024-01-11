import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  private housesUrl = 'http://localhost:8080/houses';

  constructor(private http: HttpClient) { }

  getHouses(): Observable<House[]> {
    return of('http://localhost:8080/houses');
    return this.http.get<Hero[]>(this.housesUrl)
  }
}
