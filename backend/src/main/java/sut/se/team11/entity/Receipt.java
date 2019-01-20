package sut.se.team11.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@NoArgsConstructor
@Data
public class Receipt {
    @Id
    @SequenceGenerator(name = "receipt_seq",sequenceName = "receipt_seq")
    @GeneratedValue(generator = "receipt_seq",strategy = GenerationType.SEQUENCE)
    private Long rId;
    private @NonNull Date date;
    private @NonNull int netPrice;

//    @ManyToOne
//    @JoinColumn(name = "branchId")
//    private Branch branch;
//    @ManyToOne
//    @JoinColumn(name = "employeeId")
//    private Employee employee;
//    @OneToOne
//    @JoinColumn(name = "cartId")
//    private Cart cart;
}
