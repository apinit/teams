export class Customer{
    customerid: any;
    customername: string;
    address: string;
    tel: any;
    
}

export class Cart{
    cartId: any;
    paymentStatus: string;
    date: Date;
    customer: Customer = new Customer();
}