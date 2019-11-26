import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ParkingLotService } from './../parkig-lot-form/parking-lot.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';

fdescribe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersComponent, CustomerInfoComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [ParkingLotService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.customers = [
      {
        customer_id: '101',
        pass_type: "hourly",
        size_of_vehicle: "heavy",
        duration: {
          entry_time: "2019-10-14",
          exit_time: "2019-10-15"
        },
        receipt: {
          parking_hours: 10,
          price: 100
        }
      },
      {
        customer_id: '103',
        pass_type: "hourly",
        size_of_vehicle: "medium",
        duration: {
          entry_time: "2019-10-14",
          exit_time: "2019-10-15"
        },
        receipt: {
          parking_hours: 10,
          price: 100
        }
      },
      {
        customer_id: '104',
        pass_type: "hourly",
        size_of_vehicle: "heavy",
        duration: {
          entry_time: "2019-10-14",
          exit_time: "2019-10-15"
        },
        receipt: {
          parking_hours: 10,
          price: 100
        }
      }
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('on Delete', () => {
    expect(component.onDelete('103')).not.toContain({
      customer_id: '104',
      pass_type: "hourly",
      size_of_vehicle: "heavy",
      duration: {
        entry_time: "2019-10-14",
        exit_time: "2019-10-15"
      },
      receipt: {
        parking_hours: 10,
        price: 100
      }

    })
  });
});