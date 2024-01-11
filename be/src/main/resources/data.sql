CREATE TABLE IF NOT EXISTS house(
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
DELETE FROM house;
INSERT INTO house(name) VALUES ('Gryffindor');
INSERT INTO house(name) VALUES ('Slytherin');
INSERT INTO house(name) VALUES ('Hufflepuff');
INSERT INTO house(name) VALUES ('Ravenclaw');