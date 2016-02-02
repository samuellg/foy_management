create table user(
	userId INT AUTO_INCREMENT PRIMARY KEY,
	firstName VARCHAR(30) NOT NULL,
	lastName VARCHAR(30) NOT NULL,
	balance INTEGER NOT NULL,
	isFoysteamer BOOLEAN NOT NULL DEFAULT false,
	promo YEAR
);

create table product_type(
	productTypeId INT AUTO_INCREMENT PRIMARY KEY,
	type VARCHAR(30) NOT NULL
);

create table product(
	productId INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	typeId INT,
	price INT,
	productTypeId INT,
	FOREIGN KEY (productTypeId) 
        REFERENCES product_type(productTypeId)
);

create table sale(
	saleId INT AUTO_INCREMENT PRIMARY KEY,
	productId INT,
	userId INT,
	FOREIGN KEY (productId) 
        REFERENCES product(productId),
	FOREIGN KEY (userId) 
        REFERENCES user(userId)
);
