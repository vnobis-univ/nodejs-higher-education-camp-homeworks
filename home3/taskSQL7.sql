-- Select subscriptions for user Ennis Haestier and return next information:

-- channel (user) name, channel (user) avatar, channel photo, channel description, subscription level, subscription date.

-- Information should be sorted firstly by subscription level and secondly by subscription date:

-- order for subscription levels from top to bottom: vip, follower, fan, standard; subscription date from newer to older.

SELECT ch.name, ch.avatar, ch.photo, ch.description, s.level
FROM Users AS u JOIN Subscriptions AS s ON u.id = s.owner_id
             JOIN Channels AS ch ON ch.id = s.channel_id
WHERE u.name = "Ennis Haestier"
ORDER BY CASE s.level
           WHEN 'vip' THEN 1
           WHEN 'follower' THEN 2
           WHEN 'fan' THEN 3
           WHEN 'standard' THEN 4
           ELSE 5
         END,
         s.subscription_date DESC
