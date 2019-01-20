package sut.se.team11.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import sut.se.team11.entity.SaleItem;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface SaleItemRepository extends JpaRepository<SaleItem,Long> {

}
