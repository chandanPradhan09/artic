package com.artic.articbackend.service.impl;

import com.artic.articbackend.entity.User;
import com.artic.articbackend.exception.CustomeException;
import com.artic.articbackend.global.Response;
import com.artic.articbackend.repository.UserRepository;
import com.artic.articbackend.service.UserService;
import com.artic.articbackend.validatorObj.AdminAddRequst;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Response addAdmin(AdminAddRequst adminRequst) {
            User user = new User();
            user.setRole("admin");
            user.setUserName(adminRequst.getAdminName());
            user.setEmail(adminRequst.getAdminEmailId());
            user.setMobileNumber(adminRequst.getAdminMobileNumber());
            user.setCreatedDate(new Date());
            user.setUpdatedDate(new Date());

            String hashPassword = BCrypt.hashpw(adminRequst.getPassword(), BCrypt.gensalt(12));

            user.setPassword(hashPassword);

            User savedUser = userRepository.save(user);
            return new Response("1",savedUser);
    }

    @Override
    public Response getAdmin() {
        List<User> admin = userRepository.findByRole("admin");
        return new Response("1", admin);
    }

    @Override
    public Response getAdminById(Long id) throws CustomeException {
        Optional<User> adminOptional = userRepository.findById(id);
        if(adminOptional.isPresent()){
            User admin = adminOptional.get();
            return new Response("1", admin);
        }
        throw new CustomeException("Not Found! Please Try Again with a different id.");
    }

    @Override
    public Response updateAdminById(long l,AdminAddRequst adminRequest) throws CustomeException {
        Optional<User> userOptional = userRepository.findById(l);
        if(userOptional.isPresent()){
            User user = userOptional.get();
            user.setUserId(l);
            user.setRole("admin");
            user.setUserName(adminRequest.getAdminName());
            user.setEmail(adminRequest.getAdminEmailId());
            user.setMobileNumber(adminRequest.getAdminMobileNumber());
            user.setUpdatedDate(new Date());

            String hashPassword = BCrypt.hashpw(adminRequest.getPassword(), BCrypt.gensalt(12));

            user.setPassword(hashPassword);

            User savedUser = userRepository.save(user);
            return new Response("1",savedUser);
        }
        throw new CustomeException("Not Found! Plese add First.");
    }

    @Override
    public Response deleteAdminById(long l) {
        userRepository.deleteById(l);
        return new Response("1","Successfully deleted.");
    }
}
