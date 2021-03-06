import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParkingLotComponent } from './update-parking-lot.component';

describe('UpdateParkingLotComponent', () => {
  let component: UpdateParkingLotComponent;
  let fixture: ComponentFixture<UpdateParkingLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateParkingLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParkingLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
