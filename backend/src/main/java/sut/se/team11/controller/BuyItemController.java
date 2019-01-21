package sut.se.team11.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import sut.se.team11.entity.BuyItem;
import sut.se.team11.entity.Cart;
import sut.se.team11.entity.Category;
import sut.se.team11.entity.Unit;
import sut.se.team11.repository.BuyItemRepository;
import sut.se.team11.repository.CartRepository;
import sut.se.team11.repository.CategoryRepository;
import sut.se.team11.repository.UnitRepository;

@RestController
public class BuyItemController {
    @Autowired private BuyItemRepository buyItemRepository;
    @Autowired private CartRepository cartRepository;
    @Autowired private CategoryRepository categoryRepository;
    @Autowired private UnitRepository unitRepository;

    @PostMapping(path = "/{cartId}/newBuyItem")
    private BuyItem newBuyItem(@PathVariable long cartId, @RequestBody BuyItem buyItem){
        BuyItem buyItem1 = new BuyItem();
        long categoryId = buyItem.getCategory().getCategoryId();
        long unitId = buyItem.getUnit().getUnitId();
        double totalPrice = buyItem1.caculateTotalPrice(buyItem.getPrice(), buyItem.getAmount());
        Cart cart = cartRepository.findById(cartId);
        Category category = categoryRepository.findById(categoryId);
        Unit unit = unitRepository.findById(unitId);

        buyItem1.setItemName(buyItem.getItemName());
        buyItem1.setPrice(buyItem.getPrice());
        buyItem1.setAmount(buyItem.getAmount());
        buyItem1.setTotalPrice(totalPrice);
        buyItem1.setCategory(category);
        buyItem1.setCart(cart);
        buyItem1.setUnit(unit);

        return buyItemRepository.save(buyItem1);
    }
}
