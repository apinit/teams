package sut.se.team11.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.Date;

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

}
