<?php

require "../pages-blocks/connection.php";
require "headers.php";

function getStaffDataCSV($connection, $id)
{
	header("Content-Type: text/csv; charset=utf-8");
	header("Content-Disposition: attachment; filename=typeRepairs.csv");

	$output = fopen("php://output", "w");

	fputcsv($output, array('Код сотрудника', 'ФИО сотрудника', 'Должность', 'Зарплата', 'Телефон'));

	$array = $connection->query("SELECT `staff`.`id`, `staff`.`fullName`, `JobTitle`.`name` as `JobTitleName`, `JobTitle`.`salary`, `staff`.`tel`
            FROM staff
            LEFT JOIN JobTitle ON JobTitle.id = staff.JobTitleId
            WHERE `staff`.`id` = $id");

	while ($row = $array->fetch(PDO::FETCH_ASSOC)) {
	    fputcsv($output, $row);
	}

	fclose($output);
}

function getStaffDataXLS($connection, $id)
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
			<th>Код сотрудника</th>
			<th>ФИО сотрудника</th>
			<th>Должность</th>
			<th>Зарплата</th>
			<th>Телефон</th>
		</tr>
	';

	$rows = $connection->query("SELECT `staff`.`id`, `staff`.`fullName`, `JobTitle`.`salary`, `staff`.`tel`, `JobTitle`.`name` as `JobTitleName`
            FROM staff
            LEFT JOIN JobTitle ON JobTitle.id = staff.JobTitleId
            WHERE `staff`.`id` = $id");

	while ($row = $rows->fetch(PDO::FETCH_ASSOC)) {
	    echo '<tr>
	    		<td>'.$row["id"].'</td>
				<td>'.$row["fullName"].'</td>
				<td>'.$row["JobTitleName"].'</td>
				<td>'.$row["salary"].'</td>
				<td>'.$row["tel"].'</td>
	    	 </tr>';
	}

	echo '</table>';
	echo '</body></html>';
}

$exportType = $_POST["exportType"];
$reportType = $_POST["reportType"];
$id = $_POST["id"];

switch ($reportType) {
    case "StaffData":
    	if ($exportType === "export_cvs")
        	getStaffDataCSV($connection, $id);
        else if ($exportType === "export_xls")
        	getStaffDataXLS($connection, $id);
    break;
}

?>