package com.cba.songportal.dto;

import com.cba.songportal.model.Song;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SongDTO {
    private Long id;
    private Long songNo;
    private String title;
    private String category;
    private String lyricsMalayalam;
    private String lyricsManglish;     // Add this
    private String author;             // Add this
    
 // ✅ Add this static method
    public static SongDTO fromEntity(Song song) {
        SongDTO dto = new SongDTO();
        dto.setSongNo(song.getSongNo());
        dto.setTitle(song.getTitle());
        dto.setCategory(song.getCategory());
        dto.setAuthor(song.getAuthor());
        dto.setLyricsMalayalam(song.getLyricsMalayalam());
        dto.setLyricsManglish(song.getLyricsManglish());
        return dto;
    }
}
