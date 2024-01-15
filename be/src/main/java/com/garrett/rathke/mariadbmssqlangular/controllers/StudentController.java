package com.garrett.rathke.mariadbmssqlangular.controllers;

import com.garrett.rathke.mariadbmssqlangular.models.Student;
import com.garrett.rathke.mariadbmssqlangular.repositories.StudentRepository;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student) {
        return studentRepository.save(student);
    }

    @PutMapping("/students/{id}")
    public void updateStudent(@PathVariable Integer id, @RequestBody Student student) {
        Student studentToUpdate = studentRepository.findById(id).orElse(null);
        if(studentToUpdate == null) {
            return;
        }
        studentToUpdate.setFirstName(student.getFirstName());
        studentToUpdate.setLastName(student.getLastName());
        studentToUpdate.setHouse(student.getHouse());
        studentRepository.save(studentToUpdate);
    }

    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable Integer id) {
        studentRepository.deleteById(id);
    }
}