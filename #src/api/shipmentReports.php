<?php

require "../pages-blocks/connection.php";
require "headers.php";

function getShipmentDataCSV($connection, $id)
{
	header("Content-Type: text/csv; charset=utf-8");
	header("Content-Disposition: attachment; filename=patient.csv");

	$output = fopen("php://output", "w");

	fputcsv($output, array('Номер акта', 'ФИО клиента', 'Оборудование', 'Категория оборудования', 'Вид ремонта', 'Дата окончания ремонта', 'Адрес доставки'));

	$data = $connection->query("
			SELECT
            `shipment`.`id`
            ,`client`.`name` AS client_name
            ,`equipment`.`name` AS equipment_name
            ,`category`.`name` AS category_name
            ,`typeRepairs`.`name` AS typeRepair_name
            ,`shipment`.`date_end`
            ,`client`.`address`
            FROM `shipment`
            LEFT JOIN client ON client.id = shipment.idClient
            LEFT JOIN equipment ON equipment.id = shipment.idEquipment
            LEFT JOIN typeRepairs ON typeRepairs.id = shipment.idTypeRepair
            LEFT JOIN category ON category.id = shipment.idCategory
            WHERE `shipment`.`id` = $id");

	while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
	    fputcsv($output, $row);
	}

	fclose($output);
}

function getShipmentDataXLS($connection, $id)
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
			<th>Номер акта</th>
			<th>ФИО клиента</th>
			<th>Оборудование</th>
			<th>Категория оборудования</th>
			<th>Вид ремонта</th>
			<th>Дата окончания ремонта</th>
			<th>Адрес доставки</th>
		</tr>
	';

	$data = $connection->query("
			SELECT
            `shipment`.`id`
            ,`client`.`name` AS client_name
            ,`equipment`.`name` AS equipment_name
            ,`category`.`name` AS category_name
            ,`typeRepairs`.`name` AS typeRepair_name
            ,`shipment`.`date_end`
            ,`client`.`address`
            FROM `shipment`
            LEFT JOIN client ON client.id = shipment.idClient
            LEFT JOIN equipment ON equipment.id = shipment.idEquipment
            LEFT JOIN typeRepairs ON typeRepairs.id = shipment.idTypeRepair
            LEFT JOIN category ON category.id = shipment.idCategory
            WHERE `shipment`.`id` = $id");

	while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
	    echo '<tr>
	    		<td>'.$row["id"].'</td>
				<td>'.$row["client_name"].'</td>
				<td>'.$row["equipment_name"].'</td>
				<td>'.$row["category_name"].'</td>
				<td>'.$row["typeRepair_name"].'</td>
				<td>'.$row["date_end"].'</td>
				<td>'.$row["address"].'</td>
	    	</tr>';
	}

	echo '</table>';
	echo '</body></html>';
}

$exportType = $_POST["exportType"];
$reportType = $_POST["reportType"];
$id = $_POST["id"];

switch ($reportType) {
    case "ShipmentData":
    	if ($exportType === "export_cvs")
        	getShipmentDataCSV($connection, $id);
        else if ($exportType === "export_xls")
        	getShipmentDataXLS($connection, $id);
    break;
}

?>