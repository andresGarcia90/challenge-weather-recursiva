import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSearchLocationComponent } from './sidenav-search-location.component';

describe('SidenavSearchLocationComponent', () => {
  let component: SidenavSearchLocationComponent;
  let fixture: ComponentFixture<SidenavSearchLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavSearchLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavSearchLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
