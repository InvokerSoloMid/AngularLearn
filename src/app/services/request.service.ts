import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, pluck } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) {
  }

  getRandomUser() {
    return this.http.get<{ data }>('https://randomuser.me/api/').pipe(pluck('results'));
  }
}
