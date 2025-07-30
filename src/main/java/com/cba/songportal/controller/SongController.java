package com.cba.songportal.controller;

import com.cba.songportal.dto.SongDTO;
import com.cba.songportal.model.Song;
import com.cba.songportal.repository.SongRepository;
import com.cba.songportal.service.SongService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/songs")
@CrossOrigin(origins = "*")
public class SongController {

	private final SongService songService;
	@Autowired
	SongRepository songRepository;

	public SongController(SongService songService) {
		this.songService = songService;
	}

	@GetMapping
	public List<SongDTO> getAllSongs() {
		return songRepository.findAllByOrderBySongNoAsc()
				.stream()
				.map(SongDTO::fromEntity)
				.toList();
	}


	@GetMapping("/search")
	public List<SongDTO> searchSongs(@RequestParam String q) {
		System.out.println("songNo Serached for : "+q);
		return songService.search(q);
	}


	@GetMapping("/{id}")		
	public ResponseEntity<Song> getSongById(@PathVariable Long songNo) {
		System.out.println("ID Serached for ID: "+songNo);
		return ( songRepository.findBySongNo(songNo))
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}
	
	@GetMapping("category")
	public List<Song> getByCategory(@RequestParam String cat) {
		return songRepository.findByCategoryOrderBySongNo(cat);
	}
	
	@GetMapping("/alpha")
	public List<Song> getByStartingLetter(@RequestParam String alpha) {
	    return songRepository.findByTitleStartingWith(alpha);
	}


	@GetMapping("/by-songno/{songNo}")
	public ResponseEntity<Song> getBySongNo(@PathVariable Long songNo) {
		System.out.println("songNo Serached for Sog: "+songNo);

		return songRepository.findBySongNo(songNo)
				.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping("/add")
	public ResponseEntity<?> addSong(@RequestBody SongDTO songDto) {
		try {
			Song saved = songService.save(songDto);
			return ResponseEntity.ok(saved);
		} catch (RuntimeException e) {
			return ResponseEntity.badRequest()
					.body(Map.of("error", e.getMessage()));
		}
	}



	@GetMapping("/total")
	public Map<String, Object> getTotalSongs() {
		long count = songRepository.count();
		return Map.of("total", count);
	}

	@GetMapping("/recent")
	public List<Song> getRecentSongs(@RequestParam(defaultValue = "5") int limit) {
		return songRepository.findTopNByOrderByCreatedAtDesc(limit);
	}

	@PutMapping("/update/{songNo}")
	public ResponseEntity<?> updateSong(@PathVariable Long songNo, @RequestBody SongDTO updatedDto) {
		return songRepository.findBySongNo(songNo).map(song -> {
			song.setTitle(updatedDto.getTitle());
			song.setCategory(updatedDto.getCategory());
			song.setLyricsMalayalam(updatedDto.getLyricsMalayalam());
			song.setLyricsManglish(updatedDto.getLyricsManglish());
			song.setAuthor(updatedDto.getAuthor());
			songRepository.save(song);
			return ResponseEntity.ok(song);
		}).orElse(ResponseEntity.notFound().build());
	}

	@DeleteMapping("/delete/{songNo}")
	public ResponseEntity<?> deleteSong(@PathVariable Long songNo) {
		return songRepository.findBySongNo(songNo).map(song -> {
			songRepository.delete(song);
			return ResponseEntity.ok(Map.of("message", "Deleted"));
		}).orElse(ResponseEntity.status(404).body(Map.of("error", "Song not found")));
	}







}
