package sut.se.team11.controller;

import lombok.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import sut.se.team11.entity.*;
import sut.se.team11.repository.*;

import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*")
public class ReceiptController {
    @Autowired
    private ReceiptRepository receiptRepository;
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private BranchRepository branchRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private BuyItemRepository buyItemRepository;


    @GetMapping("/receipt")
    public Collection<Receipt> receipts() {
        return receiptRepository.findAll().stream().collect(Collectors.toList());
    }

    @PostMapping("/receipt/{date}/{netPrice}/{bName}/{eName}/{cartId}")
    public Receipt newReceipt(@RequestBody Receipt receipt,
                              @PathVariable Date date,
                              @PathVariable double netPrice,
                              @PathVariable String bName,
                              @PathVariable String eName,
                              @PathVariable Long cartId){
        Receipt newReceipt = new Receipt();
        Branch newBranch = new Branch();
        Employee newEmployee = new Employee();
        Cart newCart = new Cart();
        BuyItem newBuyItem = new BuyItem();


        newReceipt.setDate(date);
        newBranch.setBName(bName);
        newEmployee.setEName(eName);
        newCart.setCartId(cartId);

        netPrice = sumTotalPrice(newBuyItem.getTotalPrice(), newCart.getBuyItems());
        newReceipt.setNetPrice(netPrice);

        return receiptRepository.save(receipt);
    }
    public double sumTotalPrice(@NonNull double totalPrice, List<BuyItem> buyItems){
        double sumTotalPrice = 0;
        int itemAmount = buyItems.size();
        for(int i = 0; i < itemAmount; i++){
            sumTotalPrice =+ totalPrice;
        }
        return sumTotalPrice;
    }

}
