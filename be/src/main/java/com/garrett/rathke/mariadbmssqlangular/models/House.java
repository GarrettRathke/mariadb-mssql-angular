package com.garrett.rathke.mariadbmssqlangular.models;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "house")
@Data
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
}