package com.cba.songportal.controller;

import com.cba.songportal.dto.LoginRequest;
import com.cba.songportal.dto.UserUpdateRequest;
import com.cba.songportal.model.User;
import com.cba.songportal.repository.UserRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    
    
    @PostMapping("/admin/login")
    public ResponseEntity<?> adminLogin(@RequestBody LoginRequest request) {
        Optional<User> userOpt = userRepository.findByUsername(request.getUsername());

        if (userOpt.isEmpty() || !userOpt.get().getPassword().equals(request.getPassword())) {
            return ResponseEntity.status(401).body(Map.of("error", "Invalid credentials"));
        }

        User user = userOpt.get();
        if (!user.getRole().equalsIgnoreCase("ADMIN")) {
            return ResponseEntity.status(403).body(Map.of("error", "Access denied"));
        }

        return ResponseEntity.ok(Map.of(
            "id", user.getId(),
            "name", user.getName(),
            "email", user.getEmail(),
            "role", user.getRole()
        ));
    }


    // ✅ Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // ✅ Get user by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            return ResponseEntity.ok(optionalUser.get());
        } else {
            return ResponseEntity.status(404).body(Map.of("error", "User not found"));
        }
    }


    // ✅ Search users by name or email
    @GetMapping("/search")
    public List<User> searchUsers(@RequestParam String q) {
//        String query = "%" + q.trim().toLowerCase() + "%";
        return userRepository.findByNameContainingIgnoreCaseOrEmailContainingIgnoreCase(q, q);
    }

    // ✅ Create new user
    @PostMapping("/create")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("error", "Email already exists"));
        }

        // Auto-generate username if not provided
        if (user.getUsername() == null || user.getUsername().isBlank() || user.getPassword() == null || user.getPassword().isBlank()) {
            user.setUsername(user.getEmail());
            user.setPassword(user.getEmail());
        }

        userRepository.save(user);
        return ResponseEntity.ok(user);
    }

    // ✅ Update user
    @PutMapping("/update")
    public ResponseEntity<?> updateUser(@RequestBody UserUpdateRequest request) {
        try {
            Long userId = request.getId();
            Optional<User> optionalUser = userRepository.findById(userId);

            if (optionalUser.isEmpty()) {
                return ResponseEntity.status(404).body(Map.of("error", "User not found"));
            }

            User user = optionalUser.get();
            user.setName(request.getName());
            user.setEmail(request.getEmail());
            user.setRole(request.getRole());

            userRepository.save(user);
            return ResponseEntity.ok(Map.of("message", "User updated successfully"));

        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("error", e.getMessage()));
        }
    }



    // ✅ Delete user
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        return userRepository.findById(id).map(user -> {
            userRepository.delete(user);
            return ResponseEntity.ok(Map.of("message", "Deleted"));
        }).orElse(ResponseEntity.status(404).body(Map.of("error", "User not found")));
    }
}
