<?php

require "../pages-blocks/connection.php";
require "headers.php";

function getCategoryDataCSV($connection, $id)
{
	header("Content-Type: text/csv; charset=utf-8");
	header("Content-Disposition: attachment; filename=file.csv");

	$output = fopen("php://output", "w");

	fputcsv($output, array('Код категории', 'Название категории'));

	$array = $connection->query("SELECT `category`.`id`, `category`.`name`
            FROM category
            WHERE `category`.`id` = $id");

	while ($row = $array->fetch(PDO::FETCH_ASSOC)) {
	    fputcsv($output, $row);
	}

	fclose($output);
}

function getCategoryDataXLS($connection, $id)
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
			<th>Код категории</th>
			<th>Название</th>
		</tr>
	';

	$rows = $connection->query("SELECT *
            FROM category
            WHERE `category`.`id` = $id");

	while ($row = $rows->fetch(PDO::FETCH_ASSOC)) {
	    echo '<tr>
	    		<td>'.$row["id"].'</td>
				<td>'.$row["name"].'</td>
	    	 </tr>';
	}

	echo '</table>';
	echo '</body></html>';
}

function getCategoryEquipmentDataCSV($connection, $id)
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
            WHERE `equipment`.`category` = $id");

    while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
        fputcsv($output, $row);
    }

    fclose($output);
}

function getCategoryEquipmentDataXLS($connection, $id)
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
            WHERE `equipment`.`category` = $id");

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
    case "categoryData":
    	if ($exportType === "export_cvs")
        	getCategoryDataCSV($connection, $id);
        else if ($exportType === "export_xls")
        	getCategoryDataXLS($connection, $id);
    break;
        case "categoryEquipmentData":
    	if ($exportType === "export_cvs")
        	getCategoryEquipmentDataCSV($connection, $id);
        else if ($exportType === "export_xls")
        	getCategoryEquipmentDataXLS($connection, $id);
    break;
}

?>