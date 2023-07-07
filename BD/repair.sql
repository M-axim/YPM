-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Май 31 2023 г., 17:27
-- Версия сервера: 10.5.17-MariaDB
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `repair`
--

-- --------------------------------------------------------

--
-- Структура таблицы `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `brand`
--

INSERT INTO `brand` (`id`, `name`) VALUES
(1, 'ЩДП -12х15'),
(2, 'ЩПД - 11x12'),
(3, '1315MA'),
(4, 'GL-802'),
(5, 'TS 2040L'),
(6, 'СПР-320Км');

-- --------------------------------------------------------

--
-- Структура таблицы `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tab` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `category`
--

INSERT INTO `category` (`id`, `name`, `tab`) VALUES
(1, 'Лазерный станок с ЧПУ', 3),
(2, 'Дробилка щековая', 2),
(3, 'Станки для распиливания бревен', 3);

-- --------------------------------------------------------

--
-- Структура таблицы `categoryTabs`
--

CREATE TABLE `categoryTabs` (
  `id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categoryTabs`
--

INSERT INTO `categoryTabs` (`id`, `pid`, `title`) VALUES
(0, 0, 'Корневой раздел'),
(1, 0, 'Категории оборудований'),
(2, 1, 'Дробилки'),
(3, 1, 'Станки');

-- --------------------------------------------------------

--
-- Структура таблицы `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `name` char(255) NOT NULL,
  `address` varchar(512) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `client`
--

INSERT INTO `client` (`id`, `name`, `address`) VALUES
(1, 'ООО \'Железо\'', 'Россия, г. Волгоград, Красноармейская ул., д. 8 кв.57'),
(2, 'ООО \'Металл\'', 'Россия, г. Щёлково, Победы ул., д. 24 кв.25'),
(3, 'ООО \'Сталь\'', 'Россия, г. Новошахтинск, Новая ул., д. 12 кв.138'),
(4, 'ООО \'Столы\'', 'Россия, г. Мытищи, Березовая ул., д. 5 кв.33');

-- --------------------------------------------------------

--
-- Структура таблицы `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `country`
--

INSERT INTO `country` (`id`, `name`) VALUES
(1, 'Россия'),
(2, 'Германия'),
(3, 'Китай');

-- --------------------------------------------------------

--
-- Структура таблицы `equipment`
--

CREATE TABLE `equipment` (
  `id` int(11) NOT NULL,
  `name` char(255) NOT NULL,
  `brand` int(11) NOT NULL,
  `country` int(11) NOT NULL,
  `year` date DEFAULT NULL,
  `category` int(11) NOT NULL,
  `organization` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `equipment`
--

INSERT INTO `equipment` (`id`, `name`, `brand`, `country`, `year`, `category`, `organization`) VALUES
(1, 'Дробилка щековая СМД-127 кап.', 1, 1, '2004-05-01', 1, 1),
(2, 'Дробилка щековая СМД-125 кап.', 1, 2, '2005-01-03', 1, 2),
(3, 'Дробилка щековая СМД-126 кап.', 1, 1, '2004-01-01', 1, 1),
(4, 'Фрезерный станок с ЧПУ Beaver STONE 1315MA', 3, 2, '2015-12-10', 1, 2),
(5, 'Фрезерный станок с ЧПУ TS', 4, 3, '2014-11-10', 1, 3),
(6, 'Фрезерный станок с ЧПУ TS 2040L', 5, 3, '2010-12-03', 1, 4),
(7, 'Станок для распиловки бревен СПР-320Км', 6, 1, '2013-03-06', 3, 4);

-- --------------------------------------------------------

--
-- Структура таблицы `JobTitle`
--

CREATE TABLE `JobTitle` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `salary` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `JobTitle`
--

INSERT INTO `JobTitle` (`id`, `name`, `salary`) VALUES
(1, 'Мастер', 45000),
(2, 'Администратор', 57000);

-- --------------------------------------------------------

--
-- Структура таблицы `repairs`
--

CREATE TABLE `repairs` (
  `id` int(11) NOT NULL,
  `date_start` datetime NOT NULL,
  `client_id` int(11) NOT NULL,
  `equipment_id` int(11) NOT NULL,
  `typeRepair_id` int(11) NOT NULL,
  `staff_id` int(11) NOT NULL,
  `date_end` datetime DEFAULT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `repairs`
--

INSERT INTO `repairs` (`id`, `date_start`, `client_id`, `equipment_id`, `typeRepair_id`, `staff_id`, `date_end`, `price`) VALUES
(1, '2023-05-19 00:00:00', 1, 1, 1, 2, '2023-05-19 20:27:00', 4000),
(2, '2023-05-25 00:00:00', 2, 2, 1, 1, '2023-05-31 16:14:00', 4000),
(3, '2023-05-01 16:15:00', 4, 5, 2, 4, '2023-05-02 16:17:00', 8000),
(4, '2023-05-15 16:18:00', 2, 4, 3, 2, '2023-05-17 16:18:00', 500),
(5, '2023-05-12 16:22:00', 2, 2, 6, 5, '2023-05-13 16:52:00', 6000),
(6, '2023-05-26 16:24:00', 2, 2, 1, 5, '2023-05-27 17:00:00', 4000),
(7, '2023-05-30 16:25:00', 1, 1, 4, 5, NULL, 12000);

-- --------------------------------------------------------

--
-- Структура таблицы `shipment`
--

CREATE TABLE `shipment` (
  `id` int(11) NOT NULL,
  `idClient` int(11) NOT NULL,
  `idEquipment` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL,
  `idTypeRepair` int(11) NOT NULL,
  `date_end` datetime NOT NULL,
  `address` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `shipment`
--

INSERT INTO `shipment` (`id`, `idClient`, `idEquipment`, `idCategory`, `idTypeRepair`, `date_end`, `address`) VALUES
(1, 1, 1, 1, 1, '2023-05-19 20:27:00', 'Россия, г. Волгоград, Красноармейская ул., д. 8 кв.57'),
(2, 2, 2, 1, 1, '2023-05-31 16:14:00', 'Россия, г. Щёлково, Победы ул., д. 24 кв.25'),
(3, 4, 5, 1, 2, '2023-05-02 16:17:00', 'Россия, г. Мытищи, Березовая ул., д. 5 кв.33'),
(4, 2, 4, 1, 3, '2023-05-17 16:18:00', 'Россия, г. Щёлково, Победы ул., д. 24 кв.25'),
(5, 2, 2, 1, 6, '2023-05-13 16:52:00', 'Россия, г. Щёлково, Победы ул., д. 24 кв.25'),
(6, 2, 2, 1, 1, '2023-05-27 17:00:00', 'Россия, г. Щёлково, Победы ул., д. 24 кв.25');

-- --------------------------------------------------------

--
-- Структура таблицы `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `fullName` char(255) NOT NULL,
  `JobTitleId` int(11) NOT NULL,
  `tel` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `staff`
--

INSERT INTO `staff` (`id`, `fullName`, `JobTitleId`, `tel`) VALUES
(1, 'Абушаева Марина Алексеевна', 1, '79453055580'),
(2, 'Боев Максим Михайлович', 1, '88888888888'),
(3, 'Казаков Павел Артёмович', 1, '79423483901'),
(4, 'Фирсов Алексей Климентович', 1, '79823197541'),
(5, 'Иванов Иван Петрович', 1, '72949487194');

-- --------------------------------------------------------

--
-- Структура таблицы `typeRepairs`
--

CREATE TABLE `typeRepairs` (
  `id` int(11) NOT NULL,
  `name` char(255) NOT NULL,
  `tab` int(11) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `typeRepairs`
--

INSERT INTO `typeRepairs` (`id`, `name`, `tab`, `price`) VALUES
(1, 'Обновить цвет', 3, 4000),
(2, 'Покрасить нержавейкой', 3, 8000),
(3, 'Замена масла у станков с ЧПУ', 4, 500),
(4, 'Ремонт гидравлики промышленного оборудования', 4, 12000),
(5, 'Ремонт измерительных систем', 4, 5000),
(6, 'Ремонт поворотных столов', 4, 6000),
(7, 'Ремонт стоек ЧПУ', 4, 8000),
(8, 'Заклинивание подвижной щеки', 5, 5400);

-- --------------------------------------------------------

--
-- Структура таблицы `typeRepairsTabs`
--

CREATE TABLE `typeRepairsTabs` (
  `id` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `title` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `typeRepairsTabs`
--

INSERT INTO `typeRepairsTabs` (`id`, `pid`, `title`) VALUES
(0, 0, 'Корневой раздел'),
(1, 0, 'Вид ремонта'),
(3, 1, 'Покраска'),
(4, 1, 'Ремонт станков с ЧПУ'),
(5, 1, 'Ремонт щековых дробилок');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryTabs` (`tab`),
  ADD KEY `categoryTabs_2` (`tab`);

--
-- Индексы таблицы `categoryTabs`
--
ALTER TABLE `categoryTabs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `client`
--
ALTER TABLE `client`
  ADD UNIQUE KEY `id` (`id`);

--
-- Индексы таблицы `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `equipment`
--
ALTER TABLE `equipment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `brand` (`brand`),
  ADD KEY `country` (`country`),
  ADD KEY `category` (`category`),
  ADD KEY `organization` (`organization`),
  ADD KEY `id` (`id`);

--
-- Индексы таблицы `JobTitle`
--
ALTER TABLE `JobTitle`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `repairs`
--
ALTER TABLE `repairs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`),
  ADD KEY `equipment_id` (`equipment_id`),
  ADD KEY `typeRepir_id` (`typeRepair_id`),
  ADD KEY `staff_id` (`staff_id`);

--
-- Индексы таблицы `shipment`
--
ALTER TABLE `shipment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idClient` (`idClient`),
  ADD KEY `idEquipment` (`idEquipment`),
  ADD KEY `idCategory` (`idCategory`),
  ADD KEY `idRepair` (`idTypeRepair`);

--
-- Индексы таблицы `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`),
  ADD KEY `JobTitleId` (`JobTitleId`);

--
-- Индексы таблицы `typeRepairs`
--
ALTER TABLE `typeRepairs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tab` (`tab`);

--
-- Индексы таблицы `typeRepairsTabs`
--
ALTER TABLE `typeRepairsTabs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `categoryTabs`
--
ALTER TABLE `categoryTabs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `equipment`
--
ALTER TABLE `equipment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `JobTitle`
--
ALTER TABLE `JobTitle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `repairs`
--
ALTER TABLE `repairs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `shipment`
--
ALTER TABLE `shipment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `staff`
--
ALTER TABLE `staff`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `typeRepairs`
--
ALTER TABLE `typeRepairs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `typeRepairsTabs`
--
ALTER TABLE `typeRepairsTabs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`tab`) REFERENCES `categoryTabs` (`id`);

--
-- Ограничения внешнего ключа таблицы `equipment`
--
ALTER TABLE `equipment`
  ADD CONSTRAINT `equipment_ibfk_1` FOREIGN KEY (`country`) REFERENCES `country` (`id`),
  ADD CONSTRAINT `equipment_ibfk_2` FOREIGN KEY (`category`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `equipment_ibfk_3` FOREIGN KEY (`organization`) REFERENCES `client` (`id`),
  ADD CONSTRAINT `equipment_ibfk_4` FOREIGN KEY (`brand`) REFERENCES `brand` (`id`);

--
-- Ограничения внешнего ключа таблицы `repairs`
--
ALTER TABLE `repairs`
  ADD CONSTRAINT `repairs_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`),
  ADD CONSTRAINT `repairs_ibfk_2` FOREIGN KEY (`equipment_id`) REFERENCES `equipment` (`id`),
  ADD CONSTRAINT `repairs_ibfk_3` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`id`),
  ADD CONSTRAINT `repairs_ibfk_4` FOREIGN KEY (`typeRepair_id`) REFERENCES `typeRepairs` (`id`);

--
-- Ограничения внешнего ключа таблицы `shipment`
--
ALTER TABLE `shipment`
  ADD CONSTRAINT `shipment_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `shipment_ibfk_2` FOREIGN KEY (`idClient`) REFERENCES `client` (`id`),
  ADD CONSTRAINT `shipment_ibfk_3` FOREIGN KEY (`idEquipment`) REFERENCES `equipment` (`id`),
  ADD CONSTRAINT `shipment_ibfk_4` FOREIGN KEY (`idTypeRepair`) REFERENCES `repairs` (`id`);

--
-- Ограничения внешнего ключа таблицы `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `staff_ibfk_1` FOREIGN KEY (`JobTitleId`) REFERENCES `JobTitle` (`id`);

--
-- Ограничения внешнего ключа таблицы `typeRepairs`
--
ALTER TABLE `typeRepairs`
  ADD CONSTRAINT `typerepairs_ibfk_1` FOREIGN KEY (`tab`) REFERENCES `typeRepairsTabs` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
