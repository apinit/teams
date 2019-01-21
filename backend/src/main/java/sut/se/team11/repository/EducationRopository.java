package sut.se.team11.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sut.se.team11.entity.Education;

public interface EducationRopository extends JpaRepository<Education, Long> {
    Education findById (long edId);
}
