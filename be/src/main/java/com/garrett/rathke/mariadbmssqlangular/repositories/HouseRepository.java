package com.garrett.rathke.mariadbmssqlangular.repositories;

import com.garrett.rathke.mariadbmssqlangular.models.House;
import org.springframework.data.repository.CrudRepository;
public interface HouseRepository extends CrudRepository<House, Integer> {
}
