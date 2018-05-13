DROP DATABASE IF EXISTS  bloggin_db;

CREATE DATABASE bloggin_db;
USE bloggin_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	PRIMARY KEY (id)
);