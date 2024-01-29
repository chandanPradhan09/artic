package com.artic.articbackend.controller;

import com.artic.articbackend.entity.User;
import com.artic.articbackend.exception.CustomeException;
import com.artic.articbackend.global.Response;
import com.artic.articbackend.service.UserService;
import com.artic.articbackend.validatorObj.AdminAddRequst;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/admin")
public class AdminContoller {

    @Autowired
    private UserService userService;

    @PostMapping
    ResponseEntity<Response> addAdmin(@RequestBody @Valid AdminAddRequst adminRequest, BindingResult result){
        if(result.hasErrors()){
            Response response = new Response("0",result.getFieldError().getDefaultMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
        Response savedResponse = userService.addAdmin(adminRequest);

        return new ResponseEntity<>(savedResponse, HttpStatus.CREATED);
    }
    @GetMapping
    ResponseEntity<Response> getAdmin(){
        Response response = userService.getAdmin();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    ResponseEntity<Response> getAdmin(@PathVariable String id) throws CustomeException {
        Response response = userService.getAdminById(Long.parseLong(id));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @PutMapping("/{id}")
    ResponseEntity<Response> updateAdmin(@PathVariable String id,@RequestBody AdminAddRequst adminRequest) throws CustomeException {
        Response response = userService.updateAdminById(Long.parseLong(id),adminRequest);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    ResponseEntity<Response> deleteAdmin(@PathVariable String id) throws CustomeException {
        Response response = userService.deleteAdminById(Long.parseLong(id));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }


}
