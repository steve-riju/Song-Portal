package com.cba.songportal.repository;

import com.cba.songportal.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(String name, String email);
    Optional<User> findByEmail(String email);
    Optional<User> findByUsername(String username);
}
