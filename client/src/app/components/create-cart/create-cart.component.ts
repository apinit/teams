import { Component, OnInit, OnDestroy } from '@angular/core';
import { FindCustomerService } from '../../shared/find-customer/find-customer.service';
import { CreateCartService } from '../../shared/create-cart/create-cart.service';
import { Customer } from '../../shared/models';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from '../../shared/models';
@Component({
  selector: 'app-create-cart',
  templateUrl: './create-cart.component.html',
  styleUrls: ['./create-cart.component.css']
})
export class CreateCartComponent implements OnInit {
  customer: Customer = new Customer();
  cart: Cart = new Cart();
  id: any;
  sub: Subscription;
  constructor(
    private find: FindCustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private cartSer: CreateCartService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(param => {
      this.id = param['id'];
      // console.log(this.id);
      this.find.findCustomer(this.id).subscribe((data) => {
        this.customer = data;
      });
    }, err => {
      console.log(err + "Errororororor");
    });
  }
  newCart(){
    this.cartSer.newCart(this.customer.customerId, this.cart).subscribe((res) => {
      console.log(res);
    })
  }

}
