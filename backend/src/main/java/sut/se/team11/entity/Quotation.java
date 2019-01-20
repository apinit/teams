package sut.se.team11.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import javax.persistence.*;
import java.util.Date;
import java.util.Set;

@Data
@Entity
@NoArgsConstructor

public class Quotation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long quotationidId;
    private @NonNull double price;
    private @NonNull String detail;
    private @NonNull Date date;



    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "customerId")
    private Set<Customer> customer;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "EmployeeId")
    private Employee employee ;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BuyItemId")
    private BuyItem buyItem;



}
