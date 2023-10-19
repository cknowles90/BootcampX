const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2];
const limit = process.argv[3];

const values = [`%${cohortName}%`, limit];

const queryString =`
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;
`;
pool.query(queryString, values)
.then(res => {
  res.rows.forEach(cohort => {
    console.log(`${cohort.cohort}: ${cohort.teacher}`);
  }) ;

}).catch(err => console.error('query error', err.stack));

