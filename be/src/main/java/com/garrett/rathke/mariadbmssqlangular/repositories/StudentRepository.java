package com.garrett.rathke.mariadbmssqlangular.repositories;

import com.garrett.rathke.mariadbmssqlangular.models.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StudentRepository extends CrudRepository<Student, Integer> {
}