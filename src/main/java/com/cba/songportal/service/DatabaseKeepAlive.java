package com.cba.songportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class DatabaseKeepAlive {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    int count=1;
    @Scheduled(fixedRate = 600000) // every 10 minutes 600000
    public void keepAlive() {
        try {
        	
            jdbcTemplate.queryForObject("SELECT 1", Integer.class);
            System.out.println("Hitting DB to test Alive [count: "+count++ +" ]");
        } catch (Exception e) {
            System.err.println("Keep-alive DB ping failed: " + e.getMessage());
        }
    }
}

