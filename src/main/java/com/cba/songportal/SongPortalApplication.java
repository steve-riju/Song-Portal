package com.cba.songportal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import jakarta.annotation.PostConstruct;

@SpringBootApplication
@EnableScheduling
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
