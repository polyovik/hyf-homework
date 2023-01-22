/* PART 3 */

/* 1. Get all the tasks assigned to users whose email ends in @spotify.com*/

SELECT task.title, user.name, user.email FROM task LEFT JOIN user ON task.user_id = user.id WHERE user.email LIKE '%spotify%';

/* updated */
SELECT task.id, user.name, user.email, task.title
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user ON user.id = user_task.user_id
WHERE user.email LIKE '%@spotify.com';

/* 2. Get all the tasks for 'Donald Duck' with status 'Not started'*/

SELECT task.title, user.name, status.name FROM task LEFT JOIN user ON user.name LIKE '%Donald Duck%' LEFT JOIN status ON status.name = 'Not started';


/* updated */
SELECT task.id,
    task.title AS 'Task Name',
    user.name AS 'user',
    status.name AS status
FROM user_task
    JOIN task ON user_task.task_id = task.id
    JOIN user ON user_task.user_id = user.id
    JOIN status ON task.status_id = status.id
WHERE
    status.name = "Not started"
    AND user.name = 'Donald Duck';

/* 3. Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)*/

SELECT task.title, user.name, task.created FROM task LEFT JOIN user ON user.name LIKE '%Maryrose Meadows%' WHERE MONTH(task.created) = 09;

/* updated */
SELECT task.id, user.name, task.title, task.created
FROM task
JOIN user_task ON task.id = user_task.task_id
JOIN user  ON user.id = user_task.user_id
WHERE user.name LIKE 'Maryrose Meadows' AND MONTH(task.created)=09;

/* 4. Find how many tasks where created in each month*/

SELECT COUNT(task.id), MONTHNAME(task.created) AS month FROM task GROUP BY month; 