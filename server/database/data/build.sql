BEGIN;
DROP TABLE IF EXISTS USERS,PRODUCTS,CART CASCADE;

CREATE TABLE USERS(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(28) UNIQUE NOT NULL,
    f_name VARCHAR(20) NOT NULL,
    email VARCHAR(20) UNIQUE NOT NULL,
    password TEXT UNIQUE NOT NULL

);

CREATE TABLE PRODUCTS(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    category VARCHAR(10) NOT NULL,
    price INTEGER NOT NULL,
    image1 TEXT NOT NULL,
    image2 TEXT,
    image3 TEXT,
    image4 TEXT
);

CREATE TABLE CART(
    userId VARCHAR(28) REFERENCES USERS(username) NOT NULL,
    productId INTEGER REFERENCES PRODUCTS(id) NOT NULL,
    quantity INTEGER DEFAULT 0
);


COMMIT;