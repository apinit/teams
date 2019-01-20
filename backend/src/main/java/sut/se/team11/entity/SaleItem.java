package sut.se.team11.entity;

import lombok.*;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Data
@Entity
@Getter @Setter
@NoArgsConstructor
public class SaleItem {
    @Id
    @SequenceGenerator(name = "buy_seq", sequenceName = "buy_seq")
    @GeneratedValue(generator = "buy_seq", strategy = GenerationType.SEQUENCE)
    private Long id;
    private @NonNull String itemName;
    private @NonNull double price;
    private @NonNull int amount;
    private @NonNull double totalPrice;
    private @NonNull Date date;


    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "customerId")
    private Set<Customer> customers;

    @ManyToOne
    @JoinColumn(name = "employeeId")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "buyitemId")
    private BuyItem buyItem;



}
