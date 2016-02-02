-- insert some users
insert into foy_management.user(firstName, lastName, promo, balance, isFoysteamer)
	values ('sam', 'lg', 2016, 15, true);
insert into foy_management.user(firstName, lastName, promo, balance, isFoysteamer)
	values ('Aude', 'Kissa', 2015, 0, false);
insert into foy_management.user(firstName, lastName, promo, balance, isFoysteamer)
	values ('Olivier', 'MASSOU', 2040, 800, true);

-- insert some product types
insert into foy_management.product_type(type) values ("bottle");

-- insert some products
insert into foy_management.product(name, productTypeId, price)
	values ("Tripel Karmeliet", (select t.productTypeId from product_type as t where type = "bottle"), 1.5);
