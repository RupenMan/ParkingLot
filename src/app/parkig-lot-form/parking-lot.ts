import { Duration } from './duration';
import { ReceiptBody } from '../parking-lot-receipt/receipt-body';

export class ParkingLot{
    customer_id : String;
    pass_type: String;
    size_of_vehicle: String;
    duration: Duration;
    receipt : ReceiptBody;

}