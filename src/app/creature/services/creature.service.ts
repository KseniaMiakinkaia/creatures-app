import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { CreatureResponse } from '../models/creature.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatureService {

  constructor(private readonly http: HttpClient) {}

  private apiURL = environment.apiURL;

  getCreatures(address: string = this.apiURL): Observable<CreatureResponse> {
    return this.http.get<CreatureResponse>(address);
  }

  search(value: string): Observable<CreatureResponse> {
    return this.http.get<CreatureResponse>(`${this.apiURL}/?search=${value}`);
  }
}
