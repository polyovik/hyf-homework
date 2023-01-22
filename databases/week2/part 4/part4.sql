CREATE DATABASE music_streaming_service;
USE 'music streaming service';

/* user_type: listener/artist */
CREATE TABLE music_streaming_service.user_type (
    id INT PRIMARY KEY AUTO_INCREMENT,
    type VARCHAR(10)
);

CREATE TABLE music_streaming_service.user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(200),
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(25) NOT NULL,
    bio TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    type_id INT,
    CONSTRAINT fk_user_to_user_type FOREIGN KEY (type_id) REFERENCES user_type(id)
);

CREATE TABLE music_streaming_service.genre (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    info TEXT
);

CREATE TABLE music_streaming_service.artist_info (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    info TEXT,
    genre_id INT,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_artist_to_user FOREIGN KEY (user_id) REFERENCES user(id),
    CONSTRAINT fk_artist_to_genre FOREIGN KEY (genre_id) REFERENCES genre(id)
);

CREATE TABLE music_streaming_service.playlist (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200),
    playlist_cover VARCHAR(200),
    user_id INT,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_playlist_to_user FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE music_streaming_service.album (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (200),
    album_cover VARCHAR(200),
    released_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    artist_info_id INT,
    CONSTRAINT fk_album_to_artist FOREIGN KEY (artist_info_id) REFERENCES artist_info(id)
);

CREATE TABLE music_streaming_service.song (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR (200),
    released_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    user_id INT,
    album_id INT NULL,
    CONSTRAINT fk_song_to_user FOREIGN KEY (user_id) REFERENCES user(id),
    CONSTRAINT fk_song_to_album FOREIGN KEY (album_id) REFERENCES album(id)
);

/* many songs can be in many playlists  */
CREATE TABLE music_streaming_service.playlist_to_song (
    id INT PRIMARY KEY AUTO_INCREMENT,
    playlist_id INT,
    song_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    CONSTRAINT fk_playlist_to_song_to_playlist FOREIGN KEY (playlist_id) REFERENCES playlist(id),
    CONSTRAINT fk_playlist_to_song_to_song FOREIGN KEY (song_id) REFERENCES song(id)
);