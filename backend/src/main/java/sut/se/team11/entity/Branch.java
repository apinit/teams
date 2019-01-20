package sut.se.team11.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor


public class Branch {
    @Id
    @SequenceGenerator(name = "beanch_seq", sequenceName = "beanch_seq")
    @GeneratedValue(generator = "beanch_seq", strategy = GenerationType.SEQUENCE)
    private @NonNull Long bId;
    private @NonNull String bName;

}
