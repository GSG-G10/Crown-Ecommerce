BEGIN;
DROP TABLE IF EXISTS USERS,PRODUCTS,CART CASCADE;

CREATE TABLE USERS(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(28) UNIQUE NOT NULL,
    f_name VARCHAR(20) NOT NULL,
    email VARCHAR(20) UNIQUE NOT NULL,
    pasword VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE PRODUCTS(
    id SERIAL PRIMARY KEY,
    title VARCHAR(20) NOT NULL,
    category VARCHAR(10) NOT NULL,
    price INTEGER NOT NULL,
    image1 TEXT NOT NULL,
    image2 TEXT,
    image3 TEXT,
    image4 TEXT
);

CREATE TABLE CART(
    username VARCHAR(28) REFERENCES USERS(USERNAME) NOT NULL,
    id INTEGER REFERENCES PRODUCTS(ID) NOT NULL,
    quantity INTEGER DEFAULT 0
);



INSERT INTO USERS (username, f_name ,email ,pasword) VALUES 
('ahmedAbadi' , 'ahmed' , 'ahmed@gmail.com' , '$2a$10$d0xD86pbtps5Qsci0KEqKuMvQ75sSvY76iMciv/sgJwbUOJmCFJtC'),
('asdAbadi' , 'asd' , 'asd@gmail.com' , '$2a$10$AkqtzOyH/HU8srfRDauQouKfE1vSA0PmKA8UjLDX.acEr.jc7xSMW');


COMMIT;