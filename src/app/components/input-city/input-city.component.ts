import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { map, startWith } from 'rxjs';
import { City } from 'src/app/main.config';
import { GeocodingService } from 'src/app/services/geocoding.service';

@Component({
  selector: 'app-input-city',
  templateUrl: './input-city.component.html',
  styleUrls: ['./input-city.component.sass']
})
export class InputCityComponent implements OnInit {
  public cities: City[] = []
  cityForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
  });

  constructor(
    private fb: FormBuilder,
    private geocodingService: GeocodingService,
    private router: Router) { }

  ngOnInit(): void {
   
    this.cityForm.valueChanges.subscribe(
      () => {
        if (this.name && this.name.value && this.name.value.length > 5) {
          this._showCities(this.name.value);
        }
      }
    );
  }

  get name() { return this.cityForm.get('name');}

  private _showCities(name: string) {
    const filterValue = name.toLowerCase();

    this.geocodingService.getCity(filterValue).subscribe(
      (data: City[]) => {
        this.cities = data.filter(city => city.type === 'locality');
      });
  }

  onSubmit(){
    if (this.cityForm.valid ) {
      let [county, country] = this.name?.value.split(',');
      if(county && country){
        county = county.trim();
        country = country.trim();
        const citySelected = this.cities.find(c => c.county === county && c.country === country);
        this.router.navigate(['/detail-weather', {city: citySelected?.county, lat: citySelected?.latitude, lon: citySelected?.longitude}]);
      }
      
    }
      
  }

}
