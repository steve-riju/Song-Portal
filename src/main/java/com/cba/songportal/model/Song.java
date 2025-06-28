package com.cba.songportal.model;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Song {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(unique = true, nullable = false)
	private Long songNo;
	private String title;
	private String category;
	private String author;
	@CreationTimestamp
	@Column(name = "created_at", updatable = false)
	private LocalDateTime createdAt;


	@Column(columnDefinition = "TEXT")
	private String lyricsMalayalam;

	@Column(columnDefinition = "TEXT")
	private String lyricsManglish;
}