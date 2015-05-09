USE mommy;

DROP TABLE IF EXISTS posts;
CREATE TABLE posts
(
  id int unsigned NOT NULL auto_increment,
  message VARCHAR(500) NOT NULL,

  PRIMARY KEY (id)
);
