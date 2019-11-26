import { Duration } from './../parkig-lot-form/duration';
import {ReceiptBody} from './receipt-body';

export class Receipt{
    customer_id : String;
    pass_type: String;
    size_of_vehicle: String;
    duration: Duration;
    receipt_body: ReceiptBody;
}