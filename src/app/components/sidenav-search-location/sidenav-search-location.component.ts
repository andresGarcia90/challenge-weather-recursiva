import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-search-location',
  templateUrl: './sidenav-search-location.component.html',
  styleUrls: ['./sidenav-search-location.component.scss']
})
export class SidenavSearchLocationComponent implements OnInit {
  @Output() closeButtonEvent: EventEmitter<boolean> = new EventEmitter<boolean> ();
  constructor() { }

  ngOnInit(): void {
  }

  closeSide(){
    this.closeButtonEvent.emit(true);
  }

}
