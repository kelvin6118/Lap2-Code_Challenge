DROP TABLE IF EXISTS posts;

CREATE TABLE posts (
    id serial PRIMARY KEY ,
    title text,
    name text,
    description text
);
