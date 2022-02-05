import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HarrypoterService {

  urlhp = 'https://hp-api.herokuapp.com/api/characters/house/';
  constructor(private http: HttpClient) { }

  getCharacter(house:string): Observable<any> {
    return this.http.get(`${this.urlhp}${house}`);
  }
}
