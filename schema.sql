### Schema
-- DROP DATABASE IF EXISTS burgers_db;-- 
CREATE DATABASE IF NOT EXISTS burgersDB;
USE burgersDB;

-- DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers
(
	id INTEGER NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	eaten BOOL DEFAULT false,
	PRIMARY KEY (id)
);

