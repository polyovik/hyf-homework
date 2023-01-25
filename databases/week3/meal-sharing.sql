CREATE DATABASE meal_sharing;

USE meal_sharing;

CREATE TABLE reservation (
	id INT PRIMARY KEY AUTO_INCREMENT,
	number_of_guests INT UNSIGNED NOT NULL,
	created_date DATE NOT NULL,
	contact_phonenumber VARCHAR(25) NOT NULL,
    contact_name VARCHAR(100) NOT NULL,
	contact_email VARCHAR(100) NOT NULL,
    meal_id INT,
    CONSTRAINT fk_meal_reservation FOREIGN KEY (meal_id) REFERENCES meal(id)
) 

CREATE TABLE meal (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(200) NOT NULL,
	description TEXT,
	location VARCHAR(200) NOT NULL,
	when TIMESTAMP NOT NULL, 
	max_reservations INT NOT NULL,
	price DECIMAL(1000.00) NOT NULL,
	created_date DATE NOT NULL
); 

CREATE TABLE review (
	id INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(200) NOT NULL,
	description TEXT NULL,
	stars INT NOT NULL,
	created_date DATE NOT NULL,
    meal_id INT,
    CONSTRAINT fk_meal_reservation FOREIGN KEY (meal_id) REFERENCES meal(id)
);




