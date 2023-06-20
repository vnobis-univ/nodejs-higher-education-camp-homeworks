-- Write an SQL statement to define tables for the next entities:

--     Concerts (name, duration, description, address, age limit, price)
--     Visitors (email, name, age)
--     Categories (name, description).

-- Notes:
-- One concert may be related to different categories.

CREATE TABLE Categories (
    id INTEGER PRIMARY KEY,
    name TINYTEXT NOT NULL,
    description TEXT
);

CREATE TABLE Concerts (
    id INTEGER PRIMARY KEY,
    name TINYTEXT NOT NULL,
    description TEXT,
    duration INTEGER NOT NULL,
    address TEXT NOT NULL,
    age_limit INTEGER,
    price INTEGER
);

CREATE TABLE ConcertCategories (
    id INTEGER PRIMARY KEY,
    concert_id INTEGER,
    category_id INTEGER,
    FOREIGN KEY (concert_id) REFERENCES Concerts(id),
    FOREIGN KEY (category_id) REFERENCES Categories(id)
);

CREATE TABLE Visitors (
    id INTEGER PRIMARY KEY,
    email TINYTEXT NOT NULL,
    age INTEGER
);

-- Should we have Visitors per concert???
CREATE TABLE ConcertVisitors (
    id INTEGER PRIMARY KEY,
    concert_id INTEGER,
    visitor_id INTEGER,
    FOREIGN KEY (concert_id) REFERENCES Concerts(id),
    FOREIGN KEY (visitor_id) REFERENCES Visitors(id)
);