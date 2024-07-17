create table books (
	id serial primary key,
	title varchar(100) not null,
	author varchar(100) not null,
	published_date date,
	isbn varchar(20) unique
);

create table users (
	id serial primary key,
	username varchar(50) unique not null,
	password varchar
);