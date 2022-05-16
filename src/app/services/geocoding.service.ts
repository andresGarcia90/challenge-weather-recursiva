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
  //   return from([{
  //     "data": [
  //         {
  //             "latitude": -38.7196,
  //             "longitude": -62.27243,
  //             "type": "locality",
  //             "name": "Bahía Blanca",
  //             "number": null,
  //             "postal_code": null,
  //             "street": null,
  //             "confidence": 1,
  //             "region": "Buenos Aires",
  //             "region_code": "BA",
  //             "county": "Bahía Blanca",
  //             "locality": "Bahía Blanca",
  //             "administrative_area": null,
  //             "neighbourhood": null,
  //             "country": "Argentina",
  //             "country_code": "ARG",
  //             "continent": "South America",
  //             "label": "Bahía Blanca, BA, Argentina"
  //         },
  //         {
  //             "latitude": -14.43333,
  //             "longitude": -62.3,
  //             "type": "locality",
  //             "name": "Bahia Blanca",
  //             "number": null,
  //             "postal_code": null,
  //             "street": null,
  //             "confidence": 1,
  //             "region": null,
  //             "region_code": null,
  //             "county": null,
  //             "locality": "Bahia Blanca",
  //             "administrative_area": null,
  //             "neighbourhood": null,
  //             "country": "Bolivia",
  //             "country_code": "BOL",
  //             "continent": null,
  //             "label": "Bahia Blanca, Bolivia"
  //         },
  //         {
  //             "latitude": 39.954981,
  //             "longitude": -76.696788,
  //             "type": "neighbourhood",
  //             "name": "Villa Green",
  //             "number": null,
  //             "postal_code": null,
  //             "street": null,
  //             "confidence": 0.6,
  //             "region": "Pennsylvania",
  //             "region_code": "PA",
  //             "county": "York County",
  //             "locality": null,
  //             "administrative_area": "Spring Garden Township",
  //             "neighbourhood": "Villa Green",
  //             "country": "United States",
  //             "country_code": "USA",
  //             "continent": "North America",
  //             "label": "Villa Green, Spring Garden Township, PA, USA"
  //         },
  //         {
  //             "latitude": -39.124437,
  //             "longitude": -62.210098,
  //             "type": "marinearea",
  //             "name": "Blanca Bay",
  //             "number": null,
  //             "postal_code": null,
  //             "street": null,
  //             "confidence": 0.1,
  //             "region": null,
  //             "region_code": null,
  //             "county": null,
  //             "locality": null,
  //             "administrative_area": null,
  //             "neighbourhood": null,
  //             "country": "Argentina",
  //             "country_code": "ARG",
  //             "continent": "South America",
  //             "label": "Blanca Bay, Argentina"
  //         }
  //     ]
  // }]).pipe(
  //   map(data => data.data),
  // );
  }
}
