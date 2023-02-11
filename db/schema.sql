DROP DATABASE IF EXISTS emp_db;
CREATE DATABASE emp_db;
USE emp_db;
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(30) NOT NULL
);
CREATE TABLE role(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary decimal not null,
  department_id INT
);
 /*can be null from challenge instructions*/
CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
   role_id INT NOT NULL,
  manager_id INT
);