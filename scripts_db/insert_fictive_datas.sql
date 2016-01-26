-- insert some users
insert into foy_management.user(firstName, lastName, promo, balance, is_foysteamer)
	values ('sam', 'lg', 2016, 15, true);
insert into foy_management.user(firstName, lastName, promo, balance, is_foysteamer)
	values ('Aude', 'Kissa', 2015, 0, false);
insert into foy_management.user(firstName, lastName, promo, balance, is_foysteamer)
	values ('Olivier', 'MASSOU', 2040, 800, true);

-- insert some product types
insert into foy_management.product_type(name) values ("bottle");

-- insert some products
insert into foy_management.product(name, product_type_id, price)
	values ("Tripel Karmeliet", (select t.product_type_id from product_type as t where name = "bottle"), 1.5);
