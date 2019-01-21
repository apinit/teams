package sut.se.team11.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Position {
    @Id
    @SequenceGenerator(name = "position_seq", sequenceName = "position_seq")
    @GeneratedValue(generator = "position_seq", strategy = GenerationType.SEQUENCE)
    private @NonNull Long psId;
    private @NonNull String psName;
}
