import { Component, OnInit, OnDestroy } from '@angular/core';

// import { Employee } from '../../shared/models';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee,Customer } from 'src/app/shared/customer/customer.service';
import { FindEmployeeService } from 'src/app/shared/find-employee/find-employee.service';

@Component({
  selector: 'app-find-employee',
  templateUrl: './find-employee.component.html',
  styleUrls: ['./find-employee.component.css']
})
export class FindEmployeeComponent implements OnInit {
  id: any;
  employee: Employee = new Employee();
  sub: Subscription;

  customer: Customer = new Customer();
  constructor(
    private find: FindEmployeeService,
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
