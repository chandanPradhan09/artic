package com.artic.articbackend.repository;

import com.artic.articbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Long> {

    List<User> findByRole(String role);
}
