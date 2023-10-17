SELECT assignments.day AS day, count(assignments.*) AS total_assignments 
FROM assignments 
GROUP BY assignments.day 
ORDER BY assignments.day;