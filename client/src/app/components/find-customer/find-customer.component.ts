import { Component, OnInit } from '@angular/core';
import { FindCustomerService } from '../../shared/find-customer/find-customer.service';
import { Customer } from '../../shared/models';
@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrls: ['./find-customer.component.css']
})
export class FindCustomerComponent implements OnInit {
  id: any;
  customer: Customer;
  constructor(
    private find: FindCustomerService
  ) { }

  ngOnInit() {
  }
  
  onClick(){
    this.find.findCustomer(this.id).subscribe((res) => {
      console.log(res);
    });
  }

}
