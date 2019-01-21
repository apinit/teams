package sut.se.team11.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import sut.se.team11.entity.SaleItem;
import sut.se.team11.repository.SaleItemRepository;

import javax.xml.crypto.Data;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SaleItemController {
    @Autowired
    private SaleItemRepository saleItemRepository;

    @GetMapping("/SaleItem")
    public Collection<SaleItem> SaleItem() {
        return saleItemRepository.findAll().stream().collect(Collectors.toList());
    }

    @PostMapping("/SaleItem/{itemName}/{price}/{totalpirce}/{amount}/{date}")
    public SaleItem saleItem(@RequestBody SaleItem saleItem, @PathVariable String itemName, @PathVariable double price, @PathVariable double totalPrice, @PathVariable int amount, @PathVariable Date date){

        SaleItem saleItem1 = new SaleItem();

        saleItem1.setItemName(itemName);
        saleItem1.setPrice(price);
        saleItem1.setTotalPrice(totalPrice);
        saleItem1.setAmount(amount);
        saleItem1.setDate(date);


        return saleItemRepository.save(saleItem);
    }

}

