/* Get meals that has a price smaller than a specific price fx 90 */
SELECT meal.title, meal.when, meal.price FROM meal WHERE price = 200; 

/* Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde */
SELECT title FROM meal WHERE title LIKE '%pizza'; 

/* Get meals that has been created between two dates */
SELECT * FROM meal WHERE created_date = '2023-01-01' AND created_date = '2023-01-02'; 

/* Get only specific number of meals fx return only 5 meals */
SELECT * FROM meal LIMIT 5; 

/* Get the meals that have good reviews */
SELECT meal.title, review.title, review.stars FROM meal LEFT JOIN review ON meal.id = review.meal_id WHERE review.stars = 4 OR = 5; 

/* Get reservations for a specific meal sorted by created_date */
SELECT * FROM reservation LEFT JOIN meal ON reservation.meal_id = meaL.id 
WHERE title LIKE '%pizza' ORDER BY meal.created_date; 

/* Sort all meals by average number of stars in the reviews */
SELECT meal.title, AVG(review.stars) FROM meal LEFT JOIN review ON review.meal_id = meaL.id 
GROUP BY meal.id ORDER BY review.stars;