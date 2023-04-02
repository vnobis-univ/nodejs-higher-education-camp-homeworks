-- Select information of channel with id '79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76' and count of its subscribers.

SELECT ch.id, ch.name, COUNT(s.id)
FROM Channels AS ch JOIN Subscriptions AS s ON ch.id = s.channel_id
WHERE ch.id = "79f6ce8f-ee0c-4ef5-9c36-da06b7f4cb76"
