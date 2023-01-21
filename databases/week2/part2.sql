CREATE DATABASE School;
USE School;

CREATE TABLE School.Class(
 id INT PRIMARY KEY AUTO_INCREMENT, 
 name VARCHAR(200),
 begins INT,
 ends INT
);

CREATE TABLE School.Student(
 id INT PRIMARY KEY AUTO_INCREMENT, 
 name VARCHAR(200),
 email VARCHAR(50),
 phone VARCHAR (25),
 class_id INT,
    CONSTRAINT fk_class
    FOREIGN KEY (class_id) 
    REFERENCES Class(id)
);

CREATE INDEX student_name_index ON Student (name);

ALTER TABLE Class ADD status ENUM ('not-started', 'ongoing', 'finished');