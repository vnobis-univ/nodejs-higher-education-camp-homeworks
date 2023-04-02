-- Select information about 5 the most liked videos ever.

SELECT *
FROM Video v
ORDER BY v.likes DESC
LIMIT 5