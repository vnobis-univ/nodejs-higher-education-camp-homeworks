-- Select the most rated (likes and dislikes) top 10 videos starting from the September which has more than 4 likes, sorted by count of likes (the most at the top).

SELECT *
FROM Videos AS v
WHERE v.likes > 4 AND v.publish_date > "2022-09-01"
ORDER BY v.likes DESC
LIMIT 10

UNION ALL

SELECT *
FROM Videos AS v
WHERE v.dislikes > 4 AND v.publish_date > "2022-09-01"
ORDER BY v.dislikes DESC
LIMIT 10