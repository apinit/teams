package sut.se.team11.entity;

import lombok.Data;
import lombok.NonNull;
import javax.persistence.*;

@Data
@Entity

public class Customer {

    @Id
    @SequenceGenerator(name = "customer_seq", sequenceName = "customer_seq")
    @GeneratedValue(generator = "customer_seq", strategy = GenerationType.SEQUENCE)
    private Long id;
    private @NonNull String name;
    private @NonNull String address;

    @ManyToOne
    private Branch branch;

    @ManyToOne
    private Career career;

    @ManyToOne
    private Province province;

    public Customer() {}

}
