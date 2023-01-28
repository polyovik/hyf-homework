/* Get all reservations */
SELECT * FROM reservation;

/*  Add a new reservation */
INSERT INTO reservation (id, number_of_guests, created_date, contact_phonenumber, contact_name, contact_email, meal_id) 
VALUES(1, 10, '2023-01-01', '+45 12 34 56', 'somebody', 'somebody@gmail.com', 1);

/* Get a reservation with any id, fx 1 */
SELECT * FROM reservation WHERE id = 1;  

/* Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE reservation SET number_of_guests = 5 WHERE id = 1; 

/* Delete a reservation with any id, fx  */
DELETE FROM reservation WHERE id = 1;