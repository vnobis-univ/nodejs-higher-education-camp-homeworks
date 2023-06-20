-- Select all users with theirs channels and return next information, sorted by channel's creation date (newer at the top):

-- user id, user name, user avatar, channel photo, channel description, channel creation date.

CREATE TABLE Users (
    id INTEGER PRIMARY KEY,
    name TINYTEXT,
    avatar TINYTEXT
);

CREATE TABLE Channel (
    id INTEGER PRIMARY KEY,
    owner_id INTEGER NOT NULL,
    photo TINYTEXT,
    description TEXT,
    creation_date DATE,
    FOREIGN KEY (owner_id) REFERENCES Users(id)
);

SELECT u.id, u.name, u.avatar, ch.photo, ch.description, ch.creation_date
FROM Users AS u JOIN Channel AS ch ON ch.owner_id = u.id
ORDER BY ch.creation_date DESC;
