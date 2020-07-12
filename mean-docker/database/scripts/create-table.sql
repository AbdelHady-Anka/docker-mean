GRANT ALL PRIVILEGES ON *.* TO 'root' IDENTIFIED BY 'somePassword';

flush privileges;

CREATE TABLE jobs (title varchar(25),description varchar(50));