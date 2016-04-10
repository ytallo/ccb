SET foreign_key_checks = 0;

CREATE TABLE `ccb_city` (
  `city_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `ccb_address` (
  `address_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `neighborhood` varchar(255) NOT NULL,
  `number` int(11) DEFAULT NULL,
  `street` varchar(255) NOT NULL,
  `city_id` bigint(20) DEFAULT NULL,
  `zip_code` varchar(8) DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  CONSTRAINT `fk_address_city` FOREIGN KEY (`city_id`) REFERENCES `ccb_city` (`city_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `ccb_crurch` (
  `crurch_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `code` varchar(12) NOT NULL,
  `name` varchar(255) NOT NULL,
  `immobile_type` int(1) DEFAULT NULL,
  `address_id` bigint(20) DEFAULT NULL,
  `servant_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`crurch_id`),
  CONSTRAINT `fk_crurch_address` FOREIGN KEY (`address_id`) REFERENCES `ccb_address` (`address_id`),
  CONSTRAINT `fk_crurch_servant` FOREIGN KEY (`servant_id`) REFERENCES `ccb_servant` (`servant_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `ccb_servant` (
  `servant_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cpf` varchar(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `ministry` int(2) DEFAULT NULL,
  PRIMARY KEY (`servant_id`),
  CONSTRAINT `fk_servant_address` FOREIGN KEY (`address_id`) REFERENCES `ccb_address` (`address_id`),
  CONSTRAINT `fk_servant_user` FOREIGN KEY (`user_id`) REFERENCES `sph_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET foreign_key_checks = 1;