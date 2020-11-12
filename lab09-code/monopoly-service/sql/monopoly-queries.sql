--
-- This SQL script implements sample queries on the Monopoly database.
--
-- @author kvlinden
-- @version Summer, 2015
--

-- Get the number of Game records.
SELECT *
  FROM Game
  ;

-- Get the player records.
SELECT * 
  FROM Player
  ;

-- Get all the users with Calvin email addresses.
SELECT *
  FROM Player
 WHERE emailAddress LIKE '%calvin%'
 ;

-- Get the highest score ever recorded.
  SELECT score
    FROM PlayerGame
ORDER BY score DESC
   LIMIT 1
   ;

-- Get the cross-product of all the tables.
SELECT *
  FROM Player, PlayerGame, Game
  ;

-- Get all games, ordered by date with the most recent game coming first
SELECT *
  FROM Game
ORDER BY time DESC
;

-- Get all the games that occurred in the past week
SELECT *
  FROM Game

  WHERE time >= DATEADD(dd, -6, GETDATE())
  AND time < DATEADD(dd, 1, GETDATE())
ORDER BY time DESC
;

-- Get all players with non-NULL names
Select *
  FROM Player
  WHERE name is not NULL
;

-- Get a list of IDs for players who have some game score larger than 2000
Select playerID
  FROM PlayerGame
  WHERE score > 2000
;

-- Get a list of players who have GMail accounts
Select emailAddress
  FROM Player
    
  WHERE SUBSTRING(
    emailAddress,
    CHARINDEX(CAST('@' AS varchar), emailAddress),  
    LEN(emailAddress)) LIKE '@gmail.edu'
;