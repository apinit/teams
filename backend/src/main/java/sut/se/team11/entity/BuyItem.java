package sut.se.team11.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;


@Data
@Entity
@NoArgsConstructor
public class BuyItem {
    @Id
    @SequenceGenerator(name = "buy_seq",sequenceName = "buy_seq")
    @GeneratedValue(generator = "buy_seq",strategy = GenerationType.SEQUENCE)
    private Long buyItemId;
    private @NonNull String itemName;
    private @NonNull double price;
    private @NonNull double totalPrice;
    private @NonNull int amount;
}