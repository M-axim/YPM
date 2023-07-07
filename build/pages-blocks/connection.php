<?php
    $connection = new PDO('mysql:host=medicine;dbname=repair;charset=utf8', 'root', '');
    $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>