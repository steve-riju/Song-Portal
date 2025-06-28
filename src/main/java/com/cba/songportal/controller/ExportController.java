package com.cba.songportal.controller;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.cba.songportal.model.Song;
import com.cba.songportal.model.User;
import com.cba.songportal.repository.SongRepository;
import com.cba.songportal.repository.UserRepository;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/api/export")
public class ExportController {

    @Autowired
    private SongRepository songRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/songs/csv")
    public void exportSongsToCSV(HttpServletResponse response) throws Exception {
        response.setContentType("text/csv");
        response.setHeader("Content-Disposition", "attachment; filename=songs.csv");

        // Write UTF-8 BOM
        response.getOutputStream().write(new byte[] { (byte) 0xEF, (byte) 0xBB, (byte) 0xBF });

        PrintWriter writer = new PrintWriter(response.getOutputStream(), true, java.nio.charset.StandardCharsets.UTF_8);
        writer.println("ID,Song No,Title,Category,Author,Lyrics Malayalam,Lyrics Manglish,Created At");

        List<Song> songs = songRepository.findAll();

        for (Song song : songs) {
            writer.printf("\"%d\",\"%d\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\"%n",
                    song.getId(),
                    song.getSongNo(),
                    escape(song.getTitle()),
                    escape(song.getCategory()),
                    escape(song.getAuthor()),
                    escape(song.getLyricsMalayalam()),
                    escape(song.getLyricsManglish()),
                    song.getCreatedAt());
        }

        writer.flush();
    }

    @GetMapping("/users/csv")
    public void exportUsersToCSV(HttpServletResponse response) throws Exception {
        response.setContentType("text/csv");
        response.setHeader("Content-Disposition", "attachment; filename=users.csv");

        List<User> users = userRepository.findAll();

        PrintWriter writer = response.getWriter();
        writer.println("ID,Username,Password,Name,Email,Role");

        for (User user : users) {
            writer.printf("\"%d\",\"%s\",\"%s\",\"%s\",\"%s\",\"%s\"%n",
                    user.getId(),
                    escape(user.getUsername()),
                    escape(user.getPassword()),
                    escape(user.getName()),
                    escape(user.getEmail()),
                    escape(user.getRole()));
        }

        writer.flush();
    }

    private String escape(String str) {
        return str != null ? str.replace("\"", "\"\"") : "";
    }

    @GetMapping("/songs/sql")
    public void exportSongsToSQL(HttpServletResponse response) throws IOException {
        response.setContentType("application/sql");
        response.setHeader("Content-Disposition", "attachment; filename=songs.sql");

        List<Song> songs = songRepository.findAll();

        PrintWriter writer = new PrintWriter(response.getOutputStream(), true, java.nio.charset.StandardCharsets.UTF_8);

        for (Song song : songs) {
            String insert = String.format(
                    "INSERT INTO song (song_no, title, category, author, lyrics_malayalam, lyrics_manglish, created_at) "
                            +
                            "VALUES (%d, '%s', '%s', '%s', '%s', '%s', '%s');",
                    song.getSongNo(),
                    escapeSql(song.getTitle()),
                    escapeSql(song.getCategory()),
                    escapeSql(song.getAuthor()),
                    escapeSql(song.getLyricsMalayalam()),
                    escapeSql(song.getLyricsManglish()),
                    song.getCreatedAt().toString());
            writer.println(insert);
        }

        writer.flush();
    }

   

     @GetMapping("/users/sql")
    public void exportUsersToSQL(HttpServletResponse response) throws IOException {
        response.setContentType("application/sql");
        response.setHeader("Content-Disposition", "attachment; filename=users.sql");

        List<User> users = userRepository.findAll();
        PrintWriter writer = new PrintWriter(response.getOutputStream(), true, StandardCharsets.UTF_8);

        for (User user : users) {
            String insert = String.format(
                "INSERT INTO user (username, password, name, email, role) " +
                "VALUES ('%s', '%s', '%s', '%s', '%s');",
                escapeSql(user.getUsername()),
                escapeSql(user.getPassword()),
                escapeSql(user.getName()),
                escapeSql(user.getEmail()),
                escapeSql(user.getRole())
            );
            writer.println(insert);
        }

        writer.flush();
    }

     // Helper function to escape special characters for SQL
    private String escapeSql(String input) {
        if (input == null) return "";
        return input.replace("'", "''")
                    .replace("\n", "\\n")
                    .replace("\r", "")
                    .trim();
    }

}
