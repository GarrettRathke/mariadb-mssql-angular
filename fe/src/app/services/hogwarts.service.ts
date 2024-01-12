import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError } from "rxjs";
import House from "../models/house";

@Injectable({
  providedIn: "root",
})
export class HogwartsService {
  private housesUrl = "http://localhost:8080/api/houses";

  constructor(private http: HttpClient) {}

  getHouses(): Observable<House[]> {
    return this.http.get<House[]>(this.housesUrl).pipe(
      catchError((err, caught) => {
        console.log(err);
        return caught;
      })
    );
  }
}
