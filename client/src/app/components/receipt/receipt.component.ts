import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReceiptService, Receipt, Employee, Cart } from '../../shared/receipt/receipt.service';
import { Subscription } from 'rxjs';

export interface PeriodicElement {
  item: string;
  position: number;
  ttp: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, item: 'Hydrogen', ttp: 1.0079},
  {position: 2, item: 'Helium', ttp: 4.0026},
  {position: 3, item: 'Lithium', ttp: 6.941},
  {position: 4, item: 'Beryllium', ttp: 9.0122},
  {position: 5, item: 'Boron', ttp: 10.811}
];

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  displayedColumns: string[] = ['position', 'item', 'ttp'];
  dataSource = ELEMENT_DATA;

  cid: any;
  eid: any;
  netPrice: Receipt = new Receipt();
  employees: Employee = new Employee();
  carts: Cart = new Cart();
  branchs: Array<any>;

  sub: Subscription;
  constructor(
    private find: ReceiptService,
    private router: Router,
    private route: ActivatedRoute,
    private receipt: ReceiptService
  ) { }
  ngOnInit() {
    // this.receipt.getCart().subscribe((cart) =>{
    //   this.carts = cart;
    // })
  }
  // findEmployeeID
  onClickEmp(){
    this.sub = this.find.getEmployee(this.eid).subscribe((eid) => {
      // console.log(res);
      this.employees = eid;
      // console.log(this.employees.customerId);
      this.router.navigate([`${this.employees.eId}/newCart`]);
    },err => {
      console.log('Error happen!!!', err);
    });
  }

// findCartID
  onClickCart(){
    this.sub = this.find.getCart(this.cid).subscribe((cid) => {
      // console.log(res);
      this.carts = cid;
      // console.log(this.employees.customerId);
      this.router.navigate([`${this.carts.cartId}/newCart`]);
    },err => {
      console.log('Error happen!!!', err);
    });
  }
}
