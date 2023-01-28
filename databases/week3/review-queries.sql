/* Get all reviews */
SELECT * FROM review; 

/* Add a new review */
INSERT INTO review (id, title, description, stars, created_date, meal_id) 
VALUES(9, 'Pepperoni pizza rolls', 'Rustle up these family-friendly pepperoni pizza rolls', 5, '2023-01-26', 2);

/* Get a review with any id, fx 1 */
SELECT * FROM review WHERE id = 9;

/* Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE review SET title = 'lasagne' WHERE id = 3;

/* Delete a review with any id, fx 1 */
DELETE FROM review WHERE id = 1; 