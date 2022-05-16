import { Component, Input, OnInit, Output } from '@angular/core';
import { AllWeather } from 'src/app/configs/interface.config'
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidenav-description',
  templateUrl: './sidenav-description.component.html',
  styleUrls: ['./sidenav-description.component.scss']
})
export class SidenavDescriptionComponent implements OnInit {
  @Input() currentWeather!: AllWeather;
  @Output() searchButtonEvent: EventEmitter<boolean> = new EventEmitter<boolean> ();
  constructor() { }

  ngOnInit(): void {
  }

  seachButton(){
    this.searchButtonEvent.emit(true);
  }

}
