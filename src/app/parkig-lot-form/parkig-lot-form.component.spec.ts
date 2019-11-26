import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkigLotFormComponent } from './parkig-lot-form.component';

describe('ParkigLotFormComponent', () => {
  let component: ParkigLotFormComponent;
  let fixture: ComponentFixture<ParkigLotFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkigLotFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkigLotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
