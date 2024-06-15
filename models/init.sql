CREATE DATABASE IF NOT EXISTS htmlology_db;
USE htmlology_db;

CREATE TABLE IF NOT EXISTS `Roles` (
  `role_id` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE IF NOT EXISTS `Statistic` (
  `statistic_id` char(7) NOT NULL,
  `user` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `theme` char(7) NOT NULL,
  `date` date NOT NULL,
  `author` char(7) NOT NULL,
  `note` varchar(120) DEFAULT NULL,
  `score` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE IF NOT EXISTS `Themes` (
  `theme_id` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` varchar(110) NOT NULL,
  `theory` text NOT NULL,
  `task` text CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `author` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

CREATE TABLE IF NOT EXISTS `Users` (
  `user_id` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `middle_name` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `role` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

ALTER TABLE `Roles`
  ADD PRIMARY KEY (`role_id`);

ALTER TABLE `Statistic`
  ADD PRIMARY KEY (`statistic_id`),
  ADD KEY `Statistic_fk0` (`user`),
  ADD KEY `Statistic_fk1` (`theme`),
  ADD KEY `author` (`author`);

ALTER TABLE `Themes`
  ADD PRIMARY KEY (`theme_id`),
  ADD UNIQUE KEY `title` (`title`),
  ADD KEY `Themes_fk0` (`author`);

ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role` (`role`);

ALTER TABLE `Statistic`
  ADD CONSTRAINT `statistic_ibfk_1` FOREIGN KEY (`user`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `statistic_ibfk_2` FOREIGN KEY (`theme`) REFERENCES `Themes` (`theme_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `statistic_ibfk_3` FOREIGN KEY (`author`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Themes`
  ADD CONSTRAINT `themes_ibfk_1` FOREIGN KEY (`author`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `Users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `Roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;