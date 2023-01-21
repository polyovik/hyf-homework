
/* PART 1 */

/* 1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id */

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) VALUES ('title', 'description','2023-01-19','2023-01-19','2022-01-20', 3, 1);

/* 2. Change the title of a task */

UPDATE task SET title = 'updated title' WHERE title = 'title';

/* 3. Change a task due date*/

UPDATE task SET due_date = '2022-01-21' WHERE title = 'updated title';

/* 4. Change a task status*/

UPDATE task SET status_id = '1' WHERE title = 'updated title';

/* 5. Mark a task as complete */

UPDATE task SET status_id = '3' WHERE title = 'updated title';

/* 6. Delete a task*/

DELETE FROM task WHERE title = 'updated title';


