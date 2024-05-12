-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 11 2024 г., 17:48
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
  `theme` char(7) NOT NULL,
  `note` varchar(120) DEFAULT NULL,
  `score` int NOT NULL
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

--
-- Дамп данных таблицы `Themes`
--

INSERT INTO `Themes` (`theme_id`, `title`, `description`, `theory`, `task`, `author`) VALUES
('0U8zq3K', 'Тег <script>', 'HTML тег, который позволяет встраивать скрипты в разметку.', '<p class=\"ql-align-justify\">Программы на <strong style=\"color: rgb(0, 102, 204);\">JavaScript </strong>могут быть вставлены в любое место HTML-документа с помощью тега <strong style=\"color: rgb(230, 0, 0);\">&lt;script&gt;</strong>.</p><p class=\"ql-align-justify\"><u>Пример:</u></p><pre data-language=\"plain\">\n&lt;!DOCTYPE HTML&gt;\n&lt;html&gt;\n&lt;body&gt;\n  &lt;p&gt;Перед скриптом...&lt;/p&gt;\n  &lt;script&gt;\n    alert( &#39;Привет, мир!&#39; );\n  &lt;/script&gt;\n  &lt;p&gt;...После скрипта.&lt;/p&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</pre><p class=\"ql-align-justify\">Тег <strong style=\"color: rgb(230, 0, 0);\">&lt;script&gt;</strong> содержит JavaScript-код, который автоматически выполнится, когда браузер его обработает.</p><h2 class=\"ql-align-justify\">Современная разметка</h2><p class=\"ql-align-justify\">Тег<strong style=\"color: rgb(230, 0, 0);\"> &lt;script&gt;</strong> имеет несколько атрибутов, которые редко используются, но всё ещё могут встретиться в старом коде:</p><p class=\"ql-align-justify\"><strong>Атрибут type: &lt;script type=…&gt;</strong></p><p class=\"ql-align-justify\">Старый стандарт HTML, HTML4, требовал наличия этого атрибута в теге <strong style=\"color: rgb(230, 0, 0);\">&lt;script&gt;</strong>. Обычно он имел значение <span style=\"color: rgb(102, 185, 102);\">type=&quot;text/javascript&quot;</span>. На текущий момент этого больше не требуется. Более того, в современном стандарте HTML смысл этого атрибута полностью изменился. Теперь он может использоваться для JavaScript-модулей. Но это тема не для начального уровня, и о ней мы поговорим в другой части учебника</p><p class=\"ql-align-justify\"><img src=\"https://storage.googleapis.com/dycr-web/image/topic/js/intro-code.png\"></p><p class=\"ql-align-justify\"><strong>Атрибут language: &lt;script language=…&gt;</strong></p><p class=\"ql-align-justify\">Этот атрибут должен был задавать язык, на котором написан скрипт. Но так как <strong style=\"color: rgb(255, 255, 102);\">JavaScript </strong>является языком по умолчанию, в этом атрибуте уже нет необходимости.</p><p class=\"ql-align-justify\"><strong>Обёртывание скрипта в HTML-комментарии.</strong></p><p class=\"ql-align-justify\">В очень древних книгах и руководствах вы сможете найти комментарии внутри тега<strong style=\"color: rgb(230, 0, 0);\"> &lt;script&gt;</strong>, <u>например</u>, такие:</p><pre data-language=\"plain\">\n&lt;script type=&quot;text/javascript&quot;&gt;\n    ...\n&lt;/script&gt;\n</pre><h2 class=\"ql-align-justify\"><u>Внешние скрипты</u></h2><p class=\"ql-align-justify\">Если у вас много JavaScript-кода, вы можете поместить его в отдельный файл.</p><p class=\"ql-align-justify\">Файл скрипта можно подключить к HTML с помощью атрибута src:</p><pre data-language=\"plain\">\n&lt;script src=&quot;/path/to/script.js&quot;&gt;&lt;/script&gt;\n</pre><p class=\"ql-align-justify\">Здесь <span style=\"color: rgb(153, 51, 255);\">/path/to/script.js</span> – это абсолютный путь от корневой папки до необходимого файла. Корневой папкой может быть корень диска или корень сайта, в зависимости от условий работы сайта. Также можно указать относительный путь от текущей страницы. Например, src=&quot;script.js&quot; или src=&quot;./script.js&quot; будет означать, что файл &quot;script.js&quot; находится в текущей папке.</p><p class=\"ql-align-justify\">Можно указать и полный URL-адрес. <strong>Например:</strong></p><pre data-language=\"plain\">\n&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js&quot;&gt;&lt;/script&gt;\n</pre><h2 class=\"ql-align-justify\">Итого</h2><ul><li>Для добавления кода JavaScript на страницу используется тег <strong style=\"color: rgb(230, 0, 0);\">&lt;script&gt;</strong></li><li>Атрибуты <strong style=\"color: rgb(255, 194, 102);\">type </strong>и <strong style=\"color: rgb(255, 194, 102);\">language </strong>необязательны.</li><li>Скрипт во внешнем файле можно вставить с помощью <strong style=\"color: rgb(102, 185, 102);\">&lt;script src=&quot;path/to/script.js&quot;&gt;&lt;/script&gt;</strong>.</li></ul><p class=\"ql-align-justify\">Это базовые вещи, которые необходимо понимать про тег <strong style=\"color: rgb(230, 0, 0);\">&lt;script&gt;</strong>. Нам ещё многое предстоит изучить про браузерные скрипты и их взаимодействие со страницей.</p><p class=\"ql-align-justify\"><strong style=\"color: rgb(153, 51, 255);\"><a href=\"https://learn.javascript.ru/hello-world\" rel=\"noopener noreferrer\" target=\"_blank\">Источник</a></strong></p>', '<ol><li>Вызвать alert<ul><li>Создайте страницу, которая отобразит сообщение <span style=\"color: rgb(0, 138, 0);\">«Я JavaScript!»</span>.</li><li>Выполните это задание в песочнице, либо на вашем жёстком диске, где – неважно, главное – проверьте, что она работает.</li></ul></li><li>Покажите сообщение с помощью внешнего скрипта<ul><li>Возьмите решение предыдущей задачи <strong style=\"color: rgb(255, 153, 0);\">Вызвать alert</strong>, и измените его. Извлеките содержимое скрипта во внешний файл <u style=\"color: rgb(102, 163, 224);\">alert.js</u>, лежащий в той же папке.</li><li>Откройте страницу, убедитесь, что оповещение работает.</li></ul></li><li>Пришлите в ответе <u>то как внешний скрипт </u><u style=\"color: rgb(102, 163, 224);\">alert.js </u><u> был подключен в HTML разметке</u> и <u>код самого внешнего скрипта</u>!</li></ol><p><strong>Демо к первому пункту:</strong></p><p><img src=\"data:image/png;base64,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\"></p>', 'NGInEUe');

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
  ADD CONSTRAINT `statistic_ibfk_1` FOREIGN KEY (`user`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `statistic_ibfk_2` FOREIGN KEY (`theme`) REFERENCES `Themes` (`theme_id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
