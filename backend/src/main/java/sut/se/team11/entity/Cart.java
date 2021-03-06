package sut.se.team11.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
public class Cart {
    @Id
    @SequenceGenerator(name = "cart_seq",sequenceName = "cart_seq")
    @GeneratedValue(generator = "cart_seq",strategy = GenerationType.SEQUENCE)
    private Long cartId;
    private @NonNull String paymentStatus;
    private @NonNull Date date;

    @OneToMany(mappedBy = "cart")
    private List<BuyItem> buyItems;
    @ManyToOne
    @JoinColumn(name = "customerId")
    private Customer customer;
}
