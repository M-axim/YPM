<?php

require "../pages-blocks/connection.php";
require "headers.php";

function getRepairsDataCSV($connection, $id)
{
	header("Content-Type: text/csv; charset=utf-8");
	header("Content-Disposition: attachment; filename=patient.csv");

	$output = fopen("php://output", "w");

	fputcsv($output, array('Код ремонта', 'Начало ремонта', 'ФИО клиента', 'Оборудование', 'Вид ремонта', 'Стоимость', 'Мастер', 'Дата окончания ремонта'));

	$data = $connection->query("
			SELECT
             `repairs`.`id`
            ,`repairs`.`date_start`
            ,`client`.`name` AS client_name
            ,`equipment`.`name` AS equipment_name
            ,`typeRepairs`.`name` AS typeRepair_name
            ,`repairs`.`price`
            ,`staff`.`fullName` AS staff_name
            ,`repairs`.`date_end`
            FROM `repairs`
            LEFT JOIN client ON client.id = repairs.client_id
            LEFT JOIN equipment ON equipment.id = repairs.equipment_id
            LEFT JOIN typeRepairs ON typeRepairs.id = repairs.typeRepair_id
            LEFT JOIN staff ON staff.id = repairs.staff_id
            WHERE `repairs`.`id` = $id");

	while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
	    fputcsv($output, $row);
	}

	fclose($output);
}

function getRepairsDataXLS($connection, $id)
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
			<th>Код ремонта</th>
			<th>Начало ремонта</th>
			<th>ФИО клиента</th>
			<th>Оборудование</th>
			<th>Вид ремонта</th>
			<th>Стоимость</th>
			<th>Мастер</th>
			<th>Дата окончания ремонта</th>
		</tr>
	';

	$data = $connection->query("
			SELECT
             `repairs`.`id` AS id
            ,`repairs`.`date_start` AS date_start
            ,`client`.`name` AS client_name
            ,`equipment`.`name` AS equipment_name
            ,`typeRepairs`.`name` AS typeRepair_name
            ,`repairs`.`price` AS price
            ,`staff`.`fullName` AS staff_name
            ,`repairs`.`date_end` AS date_end
            FROM `repairs`
            LEFT JOIN client ON client.id = repairs.client_id
            LEFT JOIN equipment ON equipment.id = repairs.equipment_id
            LEFT JOIN typeRepairs ON typeRepairs.id = repairs.typeRepair_id
            LEFT JOIN staff ON staff.id = repairs.staff_id
            WHERE `repairs`.`id` = $id");

	while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
	    echo '<tr>
	    		<td>'.$row["id"].'</td>
				<td>'.$row["date_start"].'</td>
				<td>'.$row["client_name"].'</td>
				<td>'.$row["equipment_name"].'</td>
				<td>'.$row["typeRepair_name"].'</td>
				<td>'.$row["price"].'</td>
				<td>'.$row["staff_name"].'</td>
				<td>'.$row["date_end"].'</td>
	    	</tr>';
	}

	echo '</table>';
	echo '</body></html>';
}

$exportType = $_POST["exportType"];
$reportType = $_POST["reportType"];
$id = $_POST["id"];

switch ($reportType) {
	case "repairsData":
		if ($exportType === "export_cvs")
			getRepairsDataCSV($connection, $id);
		else if ($exportType === "export_xls")
			getRepairsDataXLS($connection, $id);
	break;

}

?>