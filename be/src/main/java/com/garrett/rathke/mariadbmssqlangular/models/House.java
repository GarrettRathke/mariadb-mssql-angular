package com.garrett.rathke.mariadbmssqlangular.models;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "house")
public class House {
    public House() {
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @OneToMany(mappedBy="house")
    private Set<Student> students;
    public Integer getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public Set<Student> getStudents() {
        return students;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setStudents(Set<Student> students) {
        this.students = students;
    }

    @Override
    public String toString() {
        return "House{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", students=" + students +
                '}';
    }
}