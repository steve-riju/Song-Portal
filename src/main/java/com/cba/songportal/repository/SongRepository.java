package com.cba.songportal.repository;

import com.cba.songportal.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface SongRepository extends JpaRepository<Song, Long> {

	List<Song> findByTitleContainingIgnoreCaseOrLyricsMalayalamContainingIgnoreCaseOrLyricsManglishContainingIgnoreCase(
			String title, String lyricsMalayalam, String lyricsManglish);

	Optional<Song> findBySongNo(Long songNo);
	
	@Query(value = "SELECT * FROM song ORDER BY created_at DESC LIMIT :limit", nativeQuery = true)
	List<Song> findTopNByOrderByCreatedAtDesc(@Param("limit") int limit);
	
	List<Song> findAllByOrderBySongNoAsc();
	
	List<Song> findByCategory(String category);
	
	@Query(value = "SELECT * FROM song WHERE category = :category ORDER BY song_no", nativeQuery = true)
	List<Song> findByCategoryOrderBySongNo(@Param("category") String category);
	
	@Query(value = "SELECT * FROM song WHERE title LIKE :alpha% ORDER BY title COLLATE utf8mb4_general_ci", nativeQuery = true)
	List<Song> findByTitleStartingWith(@Param("alpha") String alpha);


	

}
