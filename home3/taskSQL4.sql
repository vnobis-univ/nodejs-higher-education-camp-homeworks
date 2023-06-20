-- Select videos from subscriptions for user Stephanie Bulger, ordered by publish date (newer at the top) and return next information:

-- video id, video title, video preview, video duration, video publish date.

SELECT v.id, v.title, v.preview, v.duration, v.publish_date
FROM Users AS u JOIN Subscriptions AS s ON u.id = s.owner_id
             JOIN Videos AS v ON v.channel_id = s.channel_id
WHERE u.name = "Stephanie Bulger"
ORDER BY v.publish_date DESC