DROP TABLE IF EXISTS Book;

CREATE TABLE Book (
    ISBN varchar(25),
    title varchar(50),
    author varchar(25),
    price real
);

GRANT SELECT ON Book to PUBLIC;

INSERT INTO Book VALUES ('978-0995435001', 'The Ghost of Emily', 'James Fox Higgins', 29.99);
INSERT INTO Book VALUES ('978-0316380522', 'The Art of Invisibility', 'Kevin Mitnick', 17.99);
INSERT INTO Book VALUES ('978-0-912986-45-6', 'The Creature from Jekyll Island', 'G. Edward Griffin', 30.75);
INSERT INTO Book VALUES ('978-1612185439', 'Casino Royale', 'Ian Fleming', 14.95);
INSERT INTO Book VALUES ('978-0913836613', 'The Holy Fire', 'Robert Payne', 26.00);
INSERT INTO Book VALUES ('1587317753', 'The Slaughter of Cities', 'E. Michael Jones', 29.00);

SELECT title
FROM Book
WHERE price is NULL;