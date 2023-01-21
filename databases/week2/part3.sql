/* PART 3 */

/* 1. Get all the tasks assigned to users whose email ends in @spotify.com*/

SELECT task.title, user.name, user.email FROM task LEFT JOIN user ON task.user_id = user.id WHERE user.email LIKE '%spotify%';

/* 2. Get all the tasks for 'Donald Duck' with status 'Not started'*/

SELECT task.title, user.name, status.name FROM task LEFT JOIN user ON user.name LIKE '%Donald Duck%' LEFT JOIN status ON status.name = 'Not started';

/* 3. Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)*/

SELECT task.title, user.name, task.created FROM task LEFT JOIN user ON user.name LIKE '%Maryrose Meadows%' WHERE MONTH(task.created) = 09;

/* 4. Find how many tasks where created in each month*/

SELECT COUNT(task.id), MONTH(task.created) FROM task GROUP BY MONTH(task.created);