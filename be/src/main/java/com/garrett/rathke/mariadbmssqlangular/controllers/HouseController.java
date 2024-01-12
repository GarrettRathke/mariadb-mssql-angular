package com.garrett.rathke.mariadbmssqlangular.controllers;

import com.garrett.rathke.mariadbmssqlangular.models.House;
import com.garrett.rathke.mariadbmssqlangular.repositories.HouseRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class HouseController {

    private final HouseRepository houseRepository;

    public HouseController(HouseRepository houseRepository) {
        this.houseRepository = houseRepository;
    }

    @GetMapping("/houses")
    public List<House> getHouses() {
        return (List<House>) houseRepository.findAll();
    }

}