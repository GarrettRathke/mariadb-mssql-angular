IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = N'house')
BEGIN
    CREATE TABLE house(
        `id` bigint(20) NOT NULL AUTO_INCREMENT,
        `name` varchar(255) NOT NULL,
        PRIMARY KEY (`id`)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    INSERT INTO house(name) VALUES ('Gryffindor');
    INSERT INTO house(name) VALUES ('Slytherin');
    INSERT INTO house(name) VALUES ('Hufflepuff');
    INSERT INTO house(name) VALUES ('Ravenclaw');
END

IF NOT EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = N'student')
BEGIN
    CREATE TABLE student(
        `id` bigint(20) NOT NULL AUTO_INCREMENT,
        `firstName` varchar(255) NOT NULL,
        `lastName` varchar(255) NOT NULL,
        `houseId` bigint(20) NOT NULL,
        PRIMARY KEY (`id`),
        FOREIGN KEY (houseId) REFERENCES house(houseId)
    )ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
    INSERT INTO student(firstName, lastName, houseId) VALUES ('Harry','Potter', 1);
    INSERT INTO student(firstName, lastName, houseId) VALUES ('Draco','Malfoy', 2);
    INSERT INTO student(firstName, lastName, houseId) VALUES ('Cedric', 'Diggory', 3);
    INSERT INTO student(firstName, lastName, houseId) VALUES ('Luna', 'Lovegood', 4);
END