SELECT assignments.day, COUNT(*) AS number_of_assignments, SUM(assignments.duration) AS duration
FROM  assignments
GROUP BY assignments.day
ORDER BY assignments.day ASC;