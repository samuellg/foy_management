create table user(
	user_id INT AUTO_INCREMENT PRIMARY KEY,
	firstName VARCHAR(30) NOT NULL,
	lastName VARCHAR(30) NOT NULL,
	balance INTEGER NOT NULL,
	is_foysteamer BOOLEAN NOT NULL DEFAULT false,
	promo YEAR
);

create table product_type(
	product_type_id INT AUTO_INCREMENT PRIMARY KEY,
	type VARCHAR(30) NOT NULL
);

create table product(
	product_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	type_id INT,
	price INT,
	product_type_id INT,
	FOREIGN KEY (product_type_id) 
        REFERENCES product_type(product_type_id)
);

create table sale(
	sale_id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	product_id INT,
	user_id INT,
	FOREIGN KEY (product_id) 
        REFERENCES product(product_id),
	FOREIGN KEY (user_id) 
        REFERENCES user(user_id)
);
