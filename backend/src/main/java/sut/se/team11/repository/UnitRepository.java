package sut.se.team11.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sut.se.team11.entity.BuyItem;
import sut.se.team11.entity.Unit;

@RepositoryRestResource
public interface UnitRepository extends JpaRepository<BuyItem, Long> {
    Unit findById(long uniId);
}
