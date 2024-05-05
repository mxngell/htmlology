-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 17 2024 г., 19:29
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
  `role_id` int NOT NULL,
  `name` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

--
-- Дамп данных таблицы `Roles`
--

INSERT INTO `Roles` (`role_id`, `name`) VALUES
(1, 'Обучающийся'),
(2, 'Преподаватель'),
(3, 'Администратор');

-- --------------------------------------------------------

--
-- Структура таблицы `Statistic`
--

CREATE TABLE `Statistic` (
  `statistic_id` int NOT NULL,
  `user` int NOT NULL,
  `theme` int NOT NULL,
  `status` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

-- --------------------------------------------------------

--
-- Структура таблицы `Themes`
--

CREATE TABLE `Themes` (
  `theme_id` int NOT NULL,
  `title` varchar(30) NOT NULL,
  `description` varchar(110) NOT NULL,
  `theory` text NOT NULL,
  `task` text CHARACTER SET cp1251 COLLATE cp1251_general_ci NOT NULL,
  `author` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

--
-- Дамп данных таблицы `Themes`
--

INSERT INTO `Themes` (`theme_id`, `title`, `description`, `theory`, `task`, `author`) VALUES
(1, 'Тег <div>', 'Некоторые сайты на 99% состоят из этого элемента. Универсальный строительный блок без семантического значения.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. ', 8),
(2, 'Тег <a>', 'Тег <a> превращает любой объект в ссылку.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. ', 8),
(3, 'Тег <span>', 'С помощью тега <span> можно выбрать часть текста или другой информации в блоке и стилизовать её.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. ', 8),
(4, 'Тег <head>', 'Говорим о заголовке страницы, фавиконке, способах подключения стилей и скриптов.', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.', 'Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. ', 8),
(5, 'Основы HTML', 'Тема представляет из себя небольшой урок для того чтобы объяснить главные принципы языка HTML', '<h1 class=\"ql-align-center\">Основы HTML</h1><p class=\"ql-align-justify\"><strong>HTML (Hypertext Markup Language)</strong> - это код, который используется для структурирования и отображения веб-страницы и её контента. Например, контент может быть структурирован внутри множества параграфов, маркированных списков или с использованием изображений и таблиц данных. Как видно из названия, эта статья даст вам базовое понимание HTML и его функций.</p><p class=\"ql-align-justify\"></p><h2>Что такое HTML на самом деле?</h2><p>HTML не является языком программирования; это язык разметки, и используется, чтобы сообщать вашему браузеру, как отображать веб-страницы, которые вы посещаете. Он может быть сложным или простым, в зависимости от того, как хочет веб-дизайнер. HTML состоит из ряда элементов, которые вы используете, чтобы вкладывать или оборачивать различные части контента, чтобы заставить контент отображаться или действовать определённым образом. Ограждающие теги могут сделать слово или изображение ссылкой на что-то ещё, могут сделать слова курсивом, сделать шрифт больше или меньше и так далее. Например, возьмём следующую строку контента:</p><blockquote>Моя кошка раздражена</blockquote><p><a href=\"https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics\" rel=\"noopener noreferrer\" target=\"_blank\">Источник</a></p><pre data-language=\"plain\">\n&lt;p&gt;Моя кошка очень раздражена&lt;/p&gt;\n</pre><p></p><h3>Главными частями нашего элемента являются:</h3><ol><li>Открывающий тег (Opening tag): Состоит из имени элемента (в данном случае, &quot;p&quot;), заключённого в открывающие и закрывающие угловые скобки. Открывающий тег указывает, где элемент начинается или начинает действовать, в данном случае — где начинается абзац.</li><li>Закрывающий тег (Closing tag): Это то же самое, что и открывающий тег, за исключением того, что он включает в себя косую черту перед именем элемента. Закрывающий элемент указывает, где элемент заканчивается, в данном случае — где заканчивается абзац. Отсутствие закрывающего тега является одной из наиболее распространённых ошибок начинающих и может приводить к странным результатам.</li><li>Контент (Content): Это контент элемента, который в данном случае является просто текстом.</li><li>Элемент(Element): Открывающий тег, закрывающий тег и контент вместе составляют элемент.</li></ol><p></p><h3><u>Анатомия HTML документа</u></h3><p>Мы завершили изучение основ отдельных HTML элементов, но они не очень полезны сами по себе. Теперь мы посмотрим, как отдельные элементы объединяются в целую HTML страницу. Давайте вернёмся к коду, который мы записывали в наш index.html (с которым мы впервые встретились в статье Работа с файлами):</p><pre data-language=\"plain\">\n&lt;!doctype html&gt;\n&lt;html&gt;\n  &lt;head&gt;\n    &lt;meta charset=&quot;utf-8&quot; /&gt;\n    &lt;title&gt;Моя тестовая страница&lt;/title&gt;\n  &lt;/head&gt;\n  &lt;body&gt;\n    &lt;img src=&quot;images/firefox-icon.png&quot; alt=&quot;Моё тестовое изображение&quot; /&gt;\n  &lt;/body&gt;\n&lt;/html&gt;\n</pre><p></p><p><img src=\"https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics/grumpy-cat-attribute-small.png\"></p>', '<p><strong>Сделайте ссылку:</strong></p><ol><li>Выберите некоторый текст. Мы выбрали текст &quot;Манифест Mozilla&quot;.</li><li>Оберните текст в элемент &lt;a&gt;, например так:</li><li>Задайте элементу &lt;a&gt; атрибут href, например так:</li><li>Заполните значение этого атрибута веб-адресом, на который вы хотите указать ссылку. Пример:</li></ol><pre data-language=\"plain\">\r\n&lt;a href=&quot;https://www.mozilla.org/ru/about/manifesto/details/&quot;&gt;\r\n  Манифест Mozilla\r\n&lt;/a&gt;\r\n</pre><p></p>', 16),
(6, 'Тег <script>', 'Тег позволяющий работать над скриптами на языке JavaScript прямо на HTML странице .', '<h2 class=\"ql-align-justify\">Кратко</h2><p class=\"ql-align-justify\">Скрипт — это элемент кода, который позволяет совершать действия, включать анимацию и создавать другие эффекты на странице. Чтобы добавить скрипты, используй тег<strong style=\"color: rgb(230, 0, 0);\"> &lt;script&gt;</strong>.</p><p class=\"ql-align-justify\">Как и CSS-стили, скрипты можно прописать внутри кода страницы, либо добавить как внешний документ по ссылке.</p><p class=\"ql-align-justify\">Теги &lt;script&gt; можно располагать в любом месте в заголовке <strong style=\"color: rgb(230, 0, 0);\">&lt;head&gt;...&lt;/head&gt;</strong> или теле <strong style=\"color: rgb(100, 100, 230);\">&lt;body&gt;...&lt;/body&gt;</strong> HTML-документа. Но лучше всего добавлять их в самый конец перед закрывающим тегом<strong style=\"color: rgb(100, 100, 230);\"> &lt;/body&gt;</strong>.</p><p></p><h2>Пример</h2><p>В этом примере мы подключим скрипты из внешнего файла с расширением <strong><span style=\"color: rgb(0, 138, 0);\">.js</span></strong>. Лучше делать именно так, вместо того, чтобы прописывать код скрипта в структуре страницы. Атрибут src указывает путь к файлу.<p><a href=\"https://doka.guide/html/script/\" rel=\"noopener noreferrer\" target=\"_blank\">Источник</a></p></p><pre data-language=\"plain\">\r\n&lt;script src=&quot;external.js&quot;&gt;\r\n    скрипт\r\n&lt;/script&gt;\r\n</pre><p></p><h2 class=\"ql-align-justify\"><h2>Как пишется</h2><p class=\"ql-align-justify\">Тег <strong style=\"color: rgb(230, 0, 0);\">&lt;script&gt;</strong> — парный, его всегда нужно закрывать с помощью <strong style=\"color: rgb(230, 0, 0);\">&lt;/script&gt;</strong>. Если ты подключаешь внешние скрипты по ссылке, то внутри тега ничего писать не надо. Но закрыть тег всё равно придётся.</p><p class=\"ql-align-justify\">Если добавить скрипты в код, то выглядеть это будет так:</p><pre data-language=\"plain\">\r\n&lt;script&gt;\r\n  window.alert(&quot;Добавили вот какой-то JavaScript-код&quot;)\r\n&lt;/script&gt;\r\n</pre><p></p><p><img src=\"https://storage.googleapis.com/dycr-web/image/topic/js/intro-code.png\"></p><p></p><h2>Ещё примеры</h2><p>Попробуем с помощью скрипта сделать так, чтобы текст увеличивался и уменьшался через каждую пару секунд:</p><pre data-language=\"plain\">\r\n&lt;!DOCTYPE html&gt;\r\n&lt;html&gt;\r\n  &lt;head&gt;\r\n    &lt;meta charset=&quot;utf-8&quot;&gt;\r\n    &lt;title&gt;Подключение скриптов&lt;/title&gt;\r\n    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;\r\n  &lt;/head&gt;\r\n  &lt;body&gt;\r\n    &lt;h1&gt;Подключение скриптов&lt;/h1&gt;\r\n    &lt;p id=&quot;blinking&quot;&gt;\r\n      Скрипты можно подключить разными способами. Например, описать их прямо\r\n      внутри HTML-страницы. Но лучше всё же в отдельном файле.\r\n    &lt;/p&gt;\r\n    &lt;script&gt;\r\n      const p = document.getElementById(&quot;blinking&quot;)\r\n      setInterval(function () {\r\n        if (p.style.fontSize !== &quot;10px&quot;) {\r\n          p.style.fontSize = &quot;10px&quot;\r\n        } else {\r\n          p.style.fontSize = &quot;20px&quot;\r\n        }\r\n      }, 2000)\r\n    &lt;/script&gt;\r\n  &lt;/body&gt;\r\n&lt;/html&gt;\r\n</pre>', '<p><strong>Выполните следующее задание:</strong></p><ul><li>Создайте простую HTML страницу;</li><li>Создайте простой JS скрипт. Например:</li></ul><pre data-language=\"plain\">\r\nconsole.log(&#39;Hello world!);\r\n</pre><ul><li>Подключите скрипт к странице двумя возможными способами.</li></ul><p><strong style=\"color: rgb(255, 153, 0);\">ПРИ НЕОБХОДИМОСТИ ОСТАВИТЬ КОММЕНТАРИИ В КОДЕ</strong></p><p></p><p><u>Ответьте на вопросы:</u></p><ol><li>Есть ли разница между двумя способами подключения? Если да то какая?</li><li>Как по вашему лучше подключать скрипты в странице? Почему?</li><li>Как лучше подключать скрипты которые работают с разметкой на странице?</li><li>Как лучше подключать скрипты которые не работают с разметкой на странице?</li></ol><p></p>', 16);

-- --------------------------------------------------------

--
-- Структура таблицы `Users`
--

CREATE TABLE `Users` (
  `user_id` int NOT NULL,
  `name` varchar(20) NOT NULL,
  `surname` varchar(20) NOT NULL,
  `middle_name` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=cp1251;

--
-- Дамп данных таблицы `Users`
--

INSERT INTO `Users` (`user_id`, `name`, `surname`, `middle_name`, `email`, `password`, `role`) VALUES
(1, 'Админ', 'Админ', 'Админ', 'admin', '$2b$07$qe9.yBmNKK0ZkGmPbmLNQukyfhwwOwbVst6kX7x8nf9t.v0JEcCiy', 3),
(3, 'Егор', 'Малышенко', 'Романович', 'egor@mail.ru', '$2b$07$CY2xZA/qtR3as/RhEI.41.XvnMNK3idjk.6DUouTOKbsDXlRBT/TO', 1),
(4, 'Расим', 'Алиев', 'Рауфович', 'rasim@mail.ru', '$2b$07$kTwaX3xZRTVr79OQ8aTca.GA.ruygIY86ivdiE/eOLMzVVBaLmGRO', 1),
(5, 'Григорий', 'Лебедев', 'Александрович', 'grigoriy@mail.ru', '$2b$07$qRFhLU12Dt.wmUTk07DyE.wF4yLmdU6HBEaT0S2Fx4T7gC9vI3eq.', 1),
(6, 'Расул', 'Магамадов', 'Абдулович', 'rasul@mail.ru', '$2b$07$K5augk4gx5720jSaiH5YseoPpepAUgkIdUyRsDnq3L0OZvwcxrLI.', 1),
(8, 'Виктория', 'Субботина', 'Михайловна', 'vik@mail.ru', '$2b$07$32AM/J4O5TcX07PDGcjPBeVj3he.cXj9pKPsNySGtTUkxs/OVJOnC', 2),
(9, 'Кристина', 'Ляшина', 'Сергеевна', 'kris@mail.ru', '$2b$07$hr3q.2ryI.M5CPkdn34a5uGRbQgjqlZ0HI7ZdiXGbIamr4fPfT8zO', 1),
(10, 'Иван', 'Насибулин', 'Михайлович', 'ivan@yandex.ru', '$2b$07$x9xNRSJAHt63.fOR0M.H2ekj0DlKOuc/nXNSpEiaPYhX7TN6yh3ru', 2),
(11, 'Джон', 'Бейкер', 'Баррера', 'jony@gmail.com', '$2b$07$2.QASZVFQNgPTnTaHxJ0neB8Z25qvZyQQ7ZNA7ZCQvTQXZd1rwpZC', 1),
(12, 'Мария', 'Сутулина', 'Олеговна', 'maria@yahoo.com', '$2b$07$x/y6Z/fxT7JtnDgBSW2olOcnh7ZlQ8iRgfQ7wRn1G4uI5uiIr8IFy', 2),
(13, 'Расим', 'Алиев', 'Рауфович', 'rasim@gmail.com', '$2b$07$kTwaX3xZRTVr79OQ8aTca.GA.ruygIY86ivdiE/eOLMzVVBaLmGRO', 1),
(15, 'Рондо', 'Маттиа ', 'Барьбери', 'rondo@gmail.com', '$2b$07$47YmwILBw6oSMvXONTo1v.zKAQl/Zrvx52WaAJxR3FwT1DlH9FFIW', 1),
(16, 'Малик', 'Никаев', 'Магамедович', 'madmalik@inbox.ru', '$2b$07$23nW5QpbEGPK/bqNjfUNuecbn/uJ4VeYBJ22mbhRQ4464Mtrx/y4C', 2),
(17, 'Женя', 'Кузнецов', 'Николаевич', 'zhenya@gmail.com', '$2b$07$k8XaqHq5Za0PXrP/wPv5ru3h31f1Gi4PsxVLYUodrI5WxCxJNM4GG', 1),
(18, 'Таисия', 'Морозова', 'Андреевна', 'tasya@rus.ru', '$2b$07$biCzrrj/uIN.EEZKk5ZCmuJoGY.Swo1rPAUzywNx.xtM0ePTO5NC.', 1),
(19, 'Даша', 'Макарова', 'Васильевна', 'dasha@list.ru', '$2b$07$vobiHjJvkorPJboLQeqsseGrY.XA3RzfbFgH8jPcSyF1.OOUrd7BS', 1);

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
  ADD KEY `Users_fk0` (`role`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Roles`
--
ALTER TABLE `Roles`
  MODIFY `role_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `Statistic`
--
ALTER TABLE `Statistic`
  MODIFY `statistic_id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `Themes`
--
ALTER TABLE `Themes`
  MODIFY `theme_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `Users`
--
ALTER TABLE `Users`
  MODIFY `user_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `Statistic`
--
ALTER TABLE `Statistic`
  ADD CONSTRAINT `Statistic_fk0` FOREIGN KEY (`user`) REFERENCES `Users` (`user_id`),
  ADD CONSTRAINT `Statistic_fk1` FOREIGN KEY (`theme`) REFERENCES `Themes` (`theme_id`);

--
-- Ограничения внешнего ключа таблицы `Themes`
--
ALTER TABLE `Themes`
  ADD CONSTRAINT `Themes_fk0` FOREIGN KEY (`author`) REFERENCES `Users` (`user_id`);

--
-- Ограничения внешнего ключа таблицы `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_fk0` FOREIGN KEY (`role`) REFERENCES `Roles` (`role_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
