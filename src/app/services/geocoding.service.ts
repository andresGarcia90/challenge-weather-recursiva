import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, from, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {
  public urlPosition = 'http://api.positionstack.com/v1/forward';
  private ak = '70b6eb2c619eaa2321811d7c7244268b';

  constructor(private http: HttpClient) { }

  getCity(city: string): Observable<any> {
    return this.http.get(`${this.urlPosition}?query=${city}&limit=10&output=json&access_key=${this.ak}`);
  }
}
