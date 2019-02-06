package sut.se.team11.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Data
@Entity
@NoArgsConstructor
public class UsedItem {
    @Id
    @NotNull
    @SequenceGenerator(name = "used_item_seq",sequenceName = "used_item_seq")
    @GeneratedValue(generator = "used_item_seq",strategy = GenerationType.SEQUENCE)
    private Long usedItemId;

    @NotNull
    private String description;
    @NotNull
    private  double price;

}
