package com.garrett.rathke.mariadbmssqlangular.controllers;

import com.garrett.rathke.mariadbmssqlangular.models.Student;
import com.garrett.rathke.mariadbmssqlangular.repositories.StudentRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class StudentController {

    private final StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @GetMapping("/students")
    public List<Student> getStudents() {
        return (List<Student>) studentRepository.findAll();
    }

    @GetMapping("/students/{id}")
    public Student getStudentById(Integer id) {
        return studentRepository.findById(id).orElse(null);
    }
}