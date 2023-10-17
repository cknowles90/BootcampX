SELECT assignments.day AS day, count(assignments.*) AS total_assignments 
FROM assignments 
GROUP BY assignments.day
HAVING COUNT(*) >= 10
ORDER BY assignments.day;