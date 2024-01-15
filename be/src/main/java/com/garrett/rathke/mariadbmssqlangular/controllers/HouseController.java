package com.garrett.rathke.mariadbmssqlangular.controllers;

import com.garrett.rathke.mariadbmssqlangular.models.House;
import com.garrett.rathke.mariadbmssqlangular.repositories.HouseRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
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

    @GetMapping("/houses/{id}")
    public House getHouseById(@PathVariable Integer id) {
        return houseRepository.findById(id).orElse(null);
    }
}