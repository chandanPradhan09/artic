package com.artic.articbackend.service.impl;

import com.artic.articbackend.entity.Student;
import com.artic.articbackend.global.Response;
import com.artic.articbackend.repository.StudentRepository;
import com.artic.articbackend.service.StudentService;
import com.artic.articbackend.validatorObj.StudentRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;


@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;
    @Override
    public Response addStudent(StudentRequest studentRequest) {
            Student student = new Student();
            student.setFirstName(studentRequest.getFirstName());
            student.setLastName(studentRequest.getLastName());
            student.setAge(studentRequest.getAge());
            student.setStudentClass(studentRequest.getStudentClass());
            student.setParentName(studentRequest.getParentName());
            student.setParentMobileNumber(studentRequest.getParentMobileNumber());
            student.setParentEmailId(studentRequest.getParentEmailId());
            student.setParentWhatsappNumber(studentRequest.getParentWhatsappNumber());
            student.setCreatedDate(new Date());
            student.setUpdatedDate(new Date());

            Student savedStudent = studentRepository.save(student);
            return new Response("1", savedStudent);
    }
}
