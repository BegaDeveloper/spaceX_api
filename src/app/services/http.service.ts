import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getNasa(): Observable<any> {
    return this.http.get<any>('https://api.spacexdata.com/v3/capsules');
  }

  getCores(): Observable<any> {
    return this.http.get<any>('https://api.spacexdata.com/v3/cores');
  }

  getShips(): Observable<any> {
    return this.http.get<any>('https://api.spacexdata.com/v3/ships');
  }
}
