/* Get all meals */
SELECT * FROM meal; 

/* Add a new meal */
INSERT INTO meal (id, title, description, location, when, max_reservation, price, created_date) 
VALUES (6, 'Chicken nuggets', 'Pan-fry or oven cook these homemade chicken nuggets.', 'Gentofte', '2023-01-28 18:00', 3, 100.50, '2023-01-25');

/* Get a meal with any id, fx 1 */
SELECT * FROM meal WHERE id = 1;

/* Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes */
UPDATE meal SET title = `burger` WHERE id = 6; 

/* Delete a meal with any id, fx 1 */
DELETE FROM meal WHERE id = 6; 





