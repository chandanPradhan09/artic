package com.artic.articbackend.global;

import com.artic.articbackend.exception.CustomeException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalException {


    @ExceptionHandler(Exception.class)
    ResponseEntity<Response> globalException(){
        return new ResponseEntity<>(new Response("0","Something went wrong! Please try again later."), HttpStatus.INTERNAL_SERVER_ERROR);
    }
    @ExceptionHandler(CustomeException.class)
    ResponseEntity<Response> globalCustomeException(CustomeException e){
        return new ResponseEntity<>(new Response("0",e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    ResponseEntity<Response> globalDataIntegrityViolationException(){
        return new ResponseEntity<>(new Response("0","Please Use Different credentials. This may in Use."), HttpStatus.CONFLICT);
    }

}
