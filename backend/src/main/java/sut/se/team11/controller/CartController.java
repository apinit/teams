package sut.se.team11.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sut.se.team11.entity.Cart;
import sut.se.team11.entity.Customer;
import sut.se.team11.repository.CartRepository;
import sut.se.team11.repository.CustomerRepository;

import java.util.Date;

@RestController
public class CartController {
    @Autowired private CartRepository cartRepository;
    @Autowired private CustomerRepository customerRepository;


    @PostMapping(path = "/{customerId}/newCart")
    private Cart newCart(@PathVariable long customerId, @RequestBody Cart cart){
        Cart cart1 = new Cart();
        Customer customer = customerRepository.findById(customerId);

        cart1.setPaymentStatus("Pending");
        cart1.setCustomer(customer);
        cart1.setDate(new Date());

        return cartRepository.save(cart1);
    }

    @GetMapping(path = "/getCart/{cartId}")
    private ResponseEntity<Cart> getOne(@PathVariable long cartId){
        Cart cart = cartRepository.findById(cartId);
        if(cart == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().body(cart);
    }
}
