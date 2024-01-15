package com.garrett.rathke.mariadbmssqlangular.repositories;

import com.garrett.rathke.mariadbmssqlangular.models.Student;
import org.springframework.data.repository.CrudRepository;
public interface StudentRepository extends CrudRepository<Student, Integer> {
}