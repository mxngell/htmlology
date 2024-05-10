-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 07 2024 г., 19:22
-- Версия сервера: 8.0.30
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `database`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Roles`
--

CREATE TABLE `Roles` (
  `role_id` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

--
-- Дамп данных таблицы `Roles`
--

INSERT INTO `Roles` (`role_id`, `name`) VALUES
('KhJEgjk', 'Обучающийся'),
('pfCv5LG', 'Администратор'),
('WnzmzM6', 'Преподаватель');

-- --------------------------------------------------------

--
-- Структура таблицы `Statistic`
--

CREATE TABLE `Statistic` (
  `statistic_id` char(7) NOT NULL,
  `user` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `theme` int NOT NULL,
  `status` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Структура таблицы `Themes`
--

CREATE TABLE `Themes` (
  `theme_id` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` varchar(110) NOT NULL,
  `theory` text NOT NULL,
  `task` text CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `author` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `user_id` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `middle_name` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `role` char(7) CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

--
-- Дамп данных таблицы `Users`
--

INSERT INTO `Users` (`user_id`, `name`, `surname`, `middle_name`, `email`, `password`, `role`) VALUES
('5MZvBBE', 'Григорий', 'Лебедев', 'Александрович', 'grigoriy@mail.ru', '$2b$07$KEWAd9j1IQzCLMvfKgifqO2KMsOAqaJkFblk5Og5AO1t2ppVvQJT.', 'KhJEgjk'),
('DG7dyOy', 'Виктория', 'Субботина', 'Михайловна', 'vik@mail.ru', '$2b$07$VBE.eCkEYi/sK32t3IBXmOuSZXgtpiUg2B5YHL4lYX8M3Jh.I7.tm', 'WnzmzM6'),
('EaGt80u', 'Джон', 'Бейкер', 'Баррера', 'john@gmail.com', '$2b$07$pzzBeaE1AU3OVuKJd5AGa.8.xakcNX3fIOF.v1Uyl4WrRglvsoqcu', 'KhJEgjk'),
('Gn9Azzd', 'Кристина', 'Ляшина', 'Сергеевна', 'kris@mail.ru', '$2b$07$W.pDUs9N/pSq4hj1LH66D.6LRMPEvjtF6iVQsK1YCE4Gvv72xX8kS', 'KhJEgjk'),
('M9dVtd1', 'Даша', 'Макарова', 'Васильевна', 'dasha@list.ru', '$2b$07$Bp0YXGa3JHsaFv68U1ghR.cvhY3AF54a9XB7P/f3Qnf3bgKFfH10.', 'KhJEgjk'),
('MArOyEO', 'Иван', 'Насибулин', 'Михайлович', 'ivan@yandex.ru', '$2b$07$GajCcJPuzKmmZE.SPVyKZeGKg6vsaC/8PkifLNtKAUksWDlCiGXPq', 'KhJEgjk'),
('nbWW0d2', 'Евгений', 'Кузнецов', 'Николаевич', 'zhenya@gmail.com', '$2b$07$aF0mm4catqBQfJsGXCFVXOlzb8HI0FTf/Yjmoc5Dw9tmf.8gDeXy.', 'WnzmzM6'),
('NGInEUe', 'Малик', 'Никаев', 'Магамедович', 'madmalik@inbox.ru', '$2b$07$oUWG3IiYr6.5qhfwyMpz6.Ph9gZN2Id66gk179DGcZUEh2XyFRkfK', 'WnzmzM6'),
('niC9azj', 'Админ', 'Админ', 'Админ', 'admin', '$2b$07$MBjVI8xdj2OQsZ6.JVo/duYaaSO0sKqRFaZnjabozfGH.p73U7l3G', 'pfCv5LG'),
('rOMxG5b', 'Мария', 'Сутулина', 'Олеговна', 'maria@yahoo.com', '$2b$07$69Bm41jTyxil/S1bvTXP2elApS51hU1KyTieSMVpQthQpIG6zxzHa', 'KhJEgjk'),
('y6udlWM', 'Егор', 'Малышенко', 'Роминович', 'egor@mail.ru', '$2b$07$ThG6fC38oH3AZIE7YKFYS.u0TTtkQiIJ2k.AlLFRNlrH1YTr2tNdK', 'KhJEgjk'),
('z66fEvu', 'Расим', 'Алиев', 'Рауфович', 'rasim@gmail.com', '$2b$07$SxVbuWdL.8jKnGYtWHFUYey.mDSb4S4mBPmIoagWpr310OhJjLinu', 'KhJEgjk');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Индексы таблицы `Statistic`
--
ALTER TABLE `Statistic`
  ADD PRIMARY KEY (`statistic_id`),
  ADD KEY `Statistic_fk0` (`user`),
  ADD KEY `Statistic_fk1` (`theme`);

--
-- Индексы таблицы `Themes`
--
ALTER TABLE `Themes`
  ADD PRIMARY KEY (`theme_id`),
  ADD UNIQUE KEY `title` (`title`),
  ADD KEY `Themes_fk0` (`author`);

--
-- Индексы таблицы `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `role` (`role`);

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Statistic`
--
ALTER TABLE `Statistic`
  ADD CONSTRAINT `statistic_ibfk_1` FOREIGN KEY (`user`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `Themes`
--
ALTER TABLE `Themes`
  ADD CONSTRAINT `themes_ibfk_1` FOREIGN KEY (`author`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `Roles` (`role_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
