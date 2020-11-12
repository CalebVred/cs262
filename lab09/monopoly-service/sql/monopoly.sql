--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @authors kvlinden, chv5
-- @version Fall, 2020
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Player CASCADE;
DROP TABLE IF EXISTS PGProp;
DROP TABLE IF EXISTS Game CASCADE;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp,
	finished integer NOT NULL
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer,
	cash integer,
	space integer
	);

--Table keeps track of players' properties
CREATE TABLE PGProp (
	--House or Hotel
	propType varchar(5) NOT NULL,
	propName varchar(10) NOT NULL,
	playerID integer,
	gameID integer,
	FOREIGN KEY (playerID) REFERENCES Player(ID),
	FOREIGN KEY (gameID) REFERENCES Game(ID)
	);


-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON PGProp TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00', 0);
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00', 0);
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00', 1);

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

--PGProp (Type, Name, GameID, PlayerID)
INSERT INTO PGProp VALUES ('House', 'Wall St.', 1, 1);
INSERT INTO PGProp VALUES ('Hotel', 'La Septima', 1, 2);
INSERT INTO PGProp VALUES ('Hotel', 'Maralago', 1, 3);
INSERT INTO PGProp VALUES ('Hotel', 'Bahamas', 2, 1);
INSERT INTO PGProp VALUES ('House', 'Beale St.', 2, 2);
INSERT INTO PGProp VALUES ('Hotel', 'Shangrala', 2, 3);
INSERT INTO PGProp VALUES ('House', 'Burton St.', 3, 2);
INSERT INTO PGProp VALUES ('House', 'Maple St.', 3, 3);
INSERT INTO PGProp VALUES ('House', 'Oak St.', 3, 2);
INSERT INTO PGProp VALUES ('Hotel', 'Merlot', 2, 2);

--PlayerGame (gameID, playerID, score, cash, space)
INSERT INTO PlayerGame VALUES (1, 1, 100, 	0.00, 	 12);
INSERT INTO PlayerGame VALUES (1, 2, 200, 	0.00, 	 11);
INSERT INTO PlayerGame VALUES (1, 3, 10000, 2350.00, 33);
INSERT INTO PlayerGame VALUES (2, 1, 12000, 1000.00, 32);
INSERT INTO PlayerGame VALUES (2, 2, 22000, 0.00, 	 30);
INSERT INTO PlayerGame VALUES (2, 3, 20, 	500.00,  2);
INSERT INTO PlayerGame VALUES (3, 2, 40, 	0.00, 	 4);
INSERT INTO PlayerGame VALUES (3, 3, 50, 	5500.00, 7);

