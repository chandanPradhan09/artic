package com.artic.articbackend.service;

import com.artic.articbackend.entity.Student;
import com.artic.articbackend.global.Response;
import com.artic.articbackend.validatorObj.StudentRequest;

public interface StudentService {

    Response addStudent(StudentRequest studentRequest);
}
