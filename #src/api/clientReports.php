<?php

require "../pages-blocks/connection.php";
require "headers.php";

function getClientDataCSV($connection, $id)
{
    header("Content-Type: text/csv; charset=utf8");
    header("Content-Disposition: attachment; filename=patient.csv");

    $output = fopen("php://output", "w");

    fputcsv($output, array('Код клиента', 'Наименования организации', 'Адрес организации'));

    $data = $connection->query("
            SELECT
             `client`.`id`
            ,`client`.`name`
            ,`client`.`address`
            FROM `client`
            WHERE `client`.`id` = $id");

    while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
        fputcsv($output, $row);
    }

    fputcsv($output, array('Код оборудования', 'Название оборудования', 'Модель оборудования', 'Страна производитель', 'Год выпуска', 'Категория оборудования'));

    $data = $connection->query("
             SELECT
             `equipment`.`id`
            ,`equipment`.`name`
            ,`brand`.`name` AS brandName
            ,`country`.`name` AS countryName
            ,`equipment`.`year` AS year
            ,`category`.`name` AS categoryName
            FROM `equipment`
            LEFT JOIN country ON country.id = equipment.country
            LEFT JOIN category ON category.id = equipment.category
            LEFT JOIN brand ON brand.id = equipment.brand
            WHERE `equipment`.`organization` = $id");

    while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
        fputcsv($output, $row);
    }

    fclose($output);
}

function getClientDataXLS($connection, $id)
{
    header('Content-Type: application/vnd.ms-excel; charset=utf-8');
    header("Content-Disposition: attachment;filename=".date("d-m-Y")."-export.xls");

    echo '
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
    ';

    echo '
      <table border="1">
        <tr>
            <th>Код клиента</th>
            <th>Наименование организации</th>
            <th>Адрес регистрации</th>
        </tr>
    ';

    $data = $connection->query("
            SELECT
             `client`.`id`
            ,`client`.`name`
            ,`client`.`address`
            FROM `client`
            WHERE `client`.`id` = $id");

    while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
        echo '<tr>
                <td>'.$row["id"].'</td>
                <td>'.$row["name"].'</td>
                <td>'.$row["address"].'</td>
            </tr>';
    }

    echo '
      <table border="1">
        <tr>
            <th>Код оборудования</th>
            <th>Название оборудования</th>
            <th>Модель оборудования</th>
            <th>Страна производитель</th>
            <th>Год выпуска</th>
            <th>Категория оборудования</th>
        </tr>
    ';

    $data = $connection->query("
             SELECT
             `equipment`.`id`
            ,`equipment`.`name`
            ,`brand`.`name` AS brandName
            ,`country`.`name` AS countryName
            ,`equipment`.`year` AS year
            ,`category`.`name` AS categoryName
            FROM `equipment`
            LEFT JOIN country ON country.id = equipment.country
            LEFT JOIN category ON category.id = equipment.category
            LEFT JOIN brand ON brand.id = equipment.brand
            WHERE `equipment`.`organization` = $id");

    while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
        echo '<tr>
                <td>'.$row["id"].'</td>
                <td>'.$row["name"].'</td>
                <td>'.$row["brandName"].'</td>
                <td>'.$row["countryName"].'</td>
                <td>'.$row["year"].'</td>
                <td>'.$row["categoryName"].'</td>
            </tr>';
    }

    echo '</table>';
    echo '</body></html>';
}

function getClientEquipmentDataCSV($connection, $id)
{
    header("Content-Type: text/csv; charset=utf8");
    header("Content-Disposition: attachment; filename=patient.csv");

    $output = fopen("php://output", "w");

    fputcsv($output, array('Код оборудования', 'Название оборудования', 'Модель оборудования', 'Страна производитель', 'Год выпуска', 'Категория оборудования', 'Владелец'));

    $data = $connection->query("
             SELECT
             `equipment`.`id`
            ,`equipment`.`name`
            ,`brand`.`name` AS brandName
            ,`country`.`name` AS countryName
            ,`equipment`.`year` AS year
            ,`category`.`name` AS categoryName
            ,`client`.`name` AS organizationName
            FROM `equipment`
            LEFT JOIN country ON country.id = equipment.country
            LEFT JOIN category ON category.id = equipment.category
            LEFT JOIN client ON client.id = equipment.organization
            LEFT JOIN brand ON brand.id = equipment.brand
            WHERE `equipment`.`organization` = $id");

    while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
        fputcsv($output, $row);
    }

    fclose($output);
}

function getClientEquipmentDataXLS($connection, $id)
{
    header('Content-Type: application/vnd.ms-excel; charset=utf-8');
    header("Content-Disposition: attachment;filename=".date("d-m-Y")."-export.xls");

    echo '
        <!doctype html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport"
                  content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
        </head>
        <body>
    ';

    echo '
      <table border="1">
        <tr>
            <th>Код оборудования</th>
            <th>Название оборудования</th>
            <th>Модель оборудования</th>
            <th>Страна производитель</th>
            <th>Год выпуска</th>
            <th>Категория оборудования</th>
            <th>Владелец</th>
        </tr>
    ';

    $data = $connection->query("
             SELECT
             `equipment`.`id`
            ,`equipment`.`name`
            ,`brand`.`name` AS brandName
            ,`country`.`name` AS countryName
            ,`equipment`.`year` AS year
            ,`category`.`name` AS categoryName
            ,`client`.`name` AS organizationName
            FROM `equipment`
            LEFT JOIN country ON country.id = equipment.country
            LEFT JOIN category ON category.id = equipment.category
            LEFT JOIN client ON client.id = equipment.organization
            LEFT JOIN brand ON brand.id = equipment.brand
            WHERE `equipment`.`organization` = $id");

    while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
        echo '<tr>
                <td>'.$row["id"].'</td>
                <td>'.$row["name"].'</td>
                <td>'.$row["brandName"].'</td>
                <td>'.$row["countryName"].'</td>
                <td>'.$row["year"].'</td>
                <td>'.$row["categoryName"].'</td>
                <td>'.$row["organizationName"].'</td>
            </tr>';
    }

    echo '</table>';
    echo '</body></html>';
}

$exportType = $_POST["exportType"];
$reportType = $_POST["reportType"];
$id = $_POST["id"];

switch ($reportType) {
    case "clientData":
        if ($exportType === "export_cvs")
            getClientDataCSV($connection, $id);
        else if ($exportType === "export_xls")
            getClientDataXLS($connection, $id);
    break;
    case "clientEquipmentData":
        if ($exportType === "export_cvs")
            getClientEquipmentDataCSV($connection, $id);
        else if ($exportType === "export_xls")
            getClientEquipmentDataXLS($connection, $id);
    break;
}

?>