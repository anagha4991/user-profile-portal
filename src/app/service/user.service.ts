import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getUserData(): Observable<any[]> {
    return this.httpClient.get<any>("assets/json/user-data.json").pipe(
      map((res: any[]) => {
        return res;
      })
    );
  }
}
