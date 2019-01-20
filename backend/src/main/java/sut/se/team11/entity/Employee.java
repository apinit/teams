package sut.se.team11.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor

public class Employee {
    @Id
    @SequenceGenerator(name = "employee_seq", sequenceName = "employee_seq")
    @GeneratedValue(generator = "employee_seq", strategy = GenerationType.SEQUENCE)
    private @NonNull Long eId;
    private @NonNull String eName;
}
