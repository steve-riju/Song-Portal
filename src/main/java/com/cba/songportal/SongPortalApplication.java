package com.cba.songportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
public class SongPortalApplication {

    public static void main(String[] args) {
        System.out.println(">>> Starting Spring Boot App <<<");
        SpringApplication.run(SongPortalApplication.class, args);
    }

    @PostConstruct
    public void postStartup() {
        System.out.println(">>> Song Portal App INIT <<<");
    }
}
