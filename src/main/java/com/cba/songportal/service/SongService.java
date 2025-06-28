package com.cba.songportal.service;

import com.cba.songportal.dto.SongDTO;
import com.cba.songportal.model.Song;
import com.cba.songportal.repository.SongRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SongService {

	private final SongRepository songRepository;

	public SongService(SongRepository songRepository) {
		this.songRepository = songRepository;
	}

	public List<SongDTO> search(String query) {
		if (query == null || query.isBlank()) return List.of();

		try {
			Long songNo = Long.parseLong(query.trim());
			return songRepository.findBySongNo(songNo)
					.stream()
					.map(this::mapToDTO)
					.collect(Collectors.toList());
		} catch (NumberFormatException e) {
			return songRepository
					.findByTitleContainingIgnoreCaseOrLyricsMalayalamContainingIgnoreCaseOrLyricsManglishContainingIgnoreCase(
							query, query, query
							).stream()
					.map(this::mapToDTO)
					.collect(Collectors.toList());
		}
	}

	private SongDTO mapToDTO(Song song) {
		return new SongDTO(
				song.getId(),
				song.getSongNo(),
				song.getTitle(),
				song.getCategory(),
				song.getLyricsMalayalam(),
				song.getLyricsManglish(),
				song.getAuthor()
				);
	}
	
	public Song save(SongDTO dto) {
		if (songRepository.findBySongNo(dto.getSongNo()).isPresent()) {
	        throw new RuntimeException("Song No " + dto.getSongNo() + " already exists.");
	    }
		
	    Song song = new Song();
	    song.setSongNo(dto.getSongNo());
	    song.setTitle(dto.getTitle());
	    song.setCategory(dto.getCategory());
	    song.setLyricsMalayalam(dto.getLyricsMalayalam());
	    song.setLyricsManglish(dto.getLyricsManglish());
	    song.setAuthor(dto.getAuthor());

	    return songRepository.save(song);
	}


}
