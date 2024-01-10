package com.garrett.rathke.mariadbmssqlangular.models;

import jakarta.persistence.*;

@Entity
@Table(name = "house")
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    public House() {
    }
    public House(String name) {
        this.name = name;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    @Override
    public String toString() {
        return "User{" +
                ", name='" + name + '\'' +
                '}';
    }
}