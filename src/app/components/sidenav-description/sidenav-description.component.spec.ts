import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDescriptionComponent } from './sidenav-description.component';

describe('SidenavDescriptionComponent', () => {
  let component: SidenavDescriptionComponent;
  let fixture: ComponentFixture<SidenavDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
