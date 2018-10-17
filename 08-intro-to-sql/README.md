# Intro to SQL

sequel
SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below


SQL - Structured Query Language
Databases - Sqlite3, Postgres, MySQL, MariaDB, Oracle, Microft SQL Server
Berkley DB,
- Relational Databases

Other Databases
- NoSQL

Persist Data
SQL

CRUD
Create
- create table, insert

Read
- SELECT

Update
- update, alter

Delete
- drop table, delete

## Challenges

1. Write the SQL to return all of the rows in the artists table?

READ
```SQL
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

READ
```SQL
SELECT *
FROM artists
WHERE name = "Black Sabbath";
```

3. Write the SQL to create a table named 'fans'
 with an autoincrementing ID that's a primary key
 and a name field of type text

CREATE
```sql
CREATE TABLE fans (
	id INTEGER PRIMARY KEY,
	name TEXT
);
```

autoincrementing => the column will increment by one every time you make a new row
it will not fill in previously used numbers (unless you make it so)

4. Write the SQL to alter the fans table to have a artist_id column type integer?

UPDATE
```sql
ALTER TABLE fans
ADD COLUMN artist_id INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

CREATE
```sql
INSERT INTO fans (name, artist_id)
VALUES ("Sydney", 169);

-- crazy shorthand
INSERT INTO fans
VALUES (10, "Sydney", 169);
```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

   ```sql

   ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql

```

8. Write the SQL to display an artists name next to their album title

```sql
SELECT artists.name, albums.title
FROM artists
INNER JOIN albums
ON albums.ArtistId = artists.ArtistId;

SELECT name, title
FROM artists
JOIN albums
ON artists.ArtistId = albums.ArtistId;

-- no difference between JOIN, INNER JOIN
```

9. Write the SQL to display artist name, album name

```sql

```

-- and number of tracks on that album

```sql

```


10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
