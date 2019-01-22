export class Customer{
    customerId: any;
    customerName: string;
    address: string;
    tel: any;
    
}

export class Cart{
    cartId: any;
    paymentStatus: string;
    date: Date;
    customer: Customer = new Customer();
}
export class Employee{
    eId: any;
    eName: string;
   
}