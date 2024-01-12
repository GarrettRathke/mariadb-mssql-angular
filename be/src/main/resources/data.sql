IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = N'house')
BEGIN
    CREATE TABLE house(
        `id` bigint(20) NOT NULL AUTO_INCREMENT,
        `name` varchar(255) DEFAULT NULL,
        PRIMARY KEY (`id`)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    INSERT INTO house(name) VALUES ('Gryffindor');
    INSERT INTO house(name) VALUES ('Slytherin');
    INSERT INTO house(name) VALUES ('Hufflepuff');
    INSERT INTO house(name) VALUES ('Ravenclaw');
END