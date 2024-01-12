import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import House from "../models/house";
import { mockHouses } from "./mockData";
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: "root",
})
export class HogwartsService {
  private housesUrl = "http://localhost:8080/api/houses";

  constructor(private http: HttpClient) {}

  getHouses(): Observable<House[]> {
    if (!environment.isContainerized) {
      return of(mockHouses);
    } else {
      return this.http.get<House[]>(this.housesUrl).pipe(
        catchError((err, caught) => {
          console.log(err);
          return caught;
        })
      );
    }
  }
}
