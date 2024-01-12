import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";
import House from "../models/house";
import Student from "../models/student";
import { mockHouses, mockStudents } from "./mockData";
import { environment } from "../../environment/environment";

@Injectable({
  providedIn: "root",
})
export class HogwartsService {
  private housesUrl = environment.apiBaseUrl + "/houses";
  private studentsUrl = environment.apiBaseUrl + "/students";

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

  getStudents(): Observable<Student[]> {
    if (!environment.isContainerized) {
      return of(mockStudents);
    } else {
      return this.http.get<Student[]>(this.studentsUrl).pipe(
        catchError((err, caught) => {
          console.log(err);
          return caught;
        })
      );
    }
  }
}
