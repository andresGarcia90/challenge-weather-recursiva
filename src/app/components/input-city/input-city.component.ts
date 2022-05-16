import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { City } from 'src/app/configs/interface.config'
import { GeocodingService } from 'src/app/services/geocoding.service';

@Component({
  selector: 'app-input-city',
  templateUrl: './input-city.component.html',
  styleUrls: ['./input-city.component.scss']
})
export class InputCityComponent implements OnInit, OnDestroy {
  public cities: City[] = [];
  inputValue = new Subject<string>();
  subscriptions: Subscription[] = [];
  trigger = this.inputValue.pipe(
    debounceTime(300),
    distinctUntilChanged()
  );
  cityForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
  });

  constructor(
    private fb: FormBuilder,
    private geocodingService: GeocodingService,
    private router: Router) { }

  ngOnInit(): void {

    const subscription = this.trigger.subscribe(currentValue => {
      if (currentValue !== '') {
        this._showCities(currentValue);
      }
      
    });
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  get name() { return this.cityForm.get('name');}

  private _showCities(name: string) {
    const filterValue = name.toLowerCase();
    const subscription = this.geocodingService.getCity(filterValue).subscribe(
      (data) => {
        const cities: City[] = data.data;
        if(cities && cities.length > 0){
          this.cities = cities.filter(city => city.type === 'locality');
        }
      });
    this.subscriptions.push(subscription);

  }

  onInput(e: any) {
    this.inputValue.next(e.target.value);
  }

  onSubmit(){
    if (this.cityForm.valid ) {
      let [county, country] = this.name?.value.split(',');
      if(county && country){
        county = county.trim();
        country = country.trim();
        const citySelected = this.cities.find(c => ( c.county === county || c.locality == county )&& c.country === country);
        if(citySelected){
          this.router.navigate(['/detail-weather', {city: county, lat: citySelected?.latitude, lon: citySelected?.longitude}])
          .then(() => {
            window.location.reload();
          });
        }
      }
      
    }
      
  }

}
