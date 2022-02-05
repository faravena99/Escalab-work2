import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GotService {
  urlgot = 'https://thronesapi.com/api/v2/Characters';
  constructor(private http: HttpClient) { }

  getCharacter(): Observable<any> {
    return this.http.get(this.urlgot);
  }
}
