import { Component, OnInit, OnDestroy } from '@angular/core';
import { FindCustomerService } from '../../shared/find-customer/find-customer.service';
import { Customer } from '../../shared/models';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-find-customer',
  templateUrl: './find-customer.component.html',
  styleUrls: ['./find-customer.component.css']
})
export class FindCustomerComponent implements OnInit {
  id: any;
  customer: Customer = new Customer();
  sub: Subscription;
  constructor(
    private find: FindCustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  
  onClick(){
    this.sub = this.find.findCustomer(this.id).subscribe((res) => {
      console.log(res);
      this.customer = res;
      console.log(this.customer.customerid);
      this.router.navigate([`${this.customer.customerid}/newCart`]);
    },err => {
      console.log('Error happen!!!', err);
    });
  }

  // ngOnDestroy(){
  //   this.sub.unsubscribe();
  //   console.log("Unsub Find")
  // }
}
