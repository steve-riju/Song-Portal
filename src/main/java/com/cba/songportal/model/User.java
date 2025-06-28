package com.cba.songportal.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
    private String name;
    @Column(unique = true, nullable = false)
    private String email;
    private String role; // e.g., ADMIN, EDITOR, VIEWER
}
