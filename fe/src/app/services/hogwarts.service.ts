import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  private housesUrl = '/api/houses';

  constructor(private http: HttpClient) { }

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.housesUrl)
  }
}
