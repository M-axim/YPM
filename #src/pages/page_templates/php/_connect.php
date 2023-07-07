<?php
$host = 'localhost'; // адрес сервера
$database = 'test'; // имя базы данных
$user = 'root'; // имя пользователя
$password = ''; // пароль
$charset = 'utf8'; // кодировка

// подключаемся к серверу
$link = "mysql:host=$host;dbname=$database;charset=$charset";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$pdo = new PDO($link, $user, $password, $opt);

// подключаемся к базе данных
$infoSlider = $pdo->query("SELECT * FROM introSlider");
$slider = $infoSlider->fetch(PDO::FETCH_ASSOC);