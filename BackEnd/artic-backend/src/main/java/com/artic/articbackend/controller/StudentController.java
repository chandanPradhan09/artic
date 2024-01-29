package com.artic.articbackend.controller;

import com.artic.articbackend.entity.Student;
import com.artic.articbackend.global.Response;
import com.artic.articbackend.service.StudentService;
import com.artic.articbackend.validatorObj.StudentRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping
    ResponseEntity<Response> addStudent(@RequestBody @Valid StudentRequest studentRequest, BindingResult result){
        if (result.hasErrors()) {
            Response response = new Response("0",result.getFieldError().getDefaultMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
        Response response = studentService.addStudent(studentRequest);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
