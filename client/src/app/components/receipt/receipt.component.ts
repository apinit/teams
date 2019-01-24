import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReceiptService, Receipt, Employee, Cart } from '../../shared/receipt/receipt.service';
import { Subscription } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { b } from '@angular/core/src/render3';
import { Branch } from 'src/app/shared/customer/customer.service';


export interface PeriodicElement {
  item: string;
  position: any;
  ttp: number;
  // cid: Cart 
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

  cid: any; //เก็บ cart_id ใบรายการสินค้าที่จะค้นหา
  eid: any; //เก็บ employee_id พนักงานที่จะค้นหา
  // netPrice: Receipt = new Receipt();
  branchs: Array<any>
  employees: Employee = new Employee; //สร้าง object พนักงานเพื่อใช้ attribute จากฝั่ง receipt.service
  carts: Cart = new Cart(); //สร้าง object ใบรายการสินค้าเพื่อใช้ attribute จากฝั่ง receipt.service

  sub: Subscription;
  constructor(
    private find: ReceiptService,
    private router: Router,
    // private route: ActivatedRoute,
    private receipt: ReceiptService,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    //
    this.receipt.getEmpName().subscribe(employee => {
      this.employees = employee; //เรียก id, name  ของ employee จาก BE
      console.log(this.employees); //pritnt  ออกมา
    });
    //
    this.receipt.getBranch().subscribe(branch => {
      this.branchs = branch; //เรียก id, name ของ branch จาก BE
      console.log(this.branchs);//pritnt  ออกมา
    });
  }

  // findEmployeeID
  onClickEmp(){
    this.sub = this.find.getEmployee(this.eid).subscribe((eid) => {
      console.log(eid);//pritnt  ออกมา
      this.employees.eId = eid; 
      console.log(this.employees.eId);//pritnt  ออกมา
      this.router.navigate([`${this.employees.eId}/newEmployee`]);
    },err => {
      console.log('Error happen!!!', err);//pritnt  ออกมา
    });
  }

// findCartID
  onClickCart(){
    this.sub = this.find.getCart(this.cid).subscribe((cid) => {
      console.log(cid);//pritnt  ออกมา
      this.carts.cartId = cid;
      console.log(this.carts.cartId);//pritnt  ออกมา
      this.router.navigate([`${this.carts.cartId}/newCart`]);
    },err => {
      console.log('Error happen!!!', err);//pritnt  ออกมา
    });
  }
  
}
