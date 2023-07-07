<?php

require "../pages-blocks/connection.php";

require "headers.php";
header("Content-type: json/application");

$method = $_SERVER["REQUEST_METHOD"];
$id = $_GET["id"];


$query  = explode('&', $_SERVER['QUERY_STRING']);

$str = "";

foreach($query as $param)
{
    if ($str !== "")
    {
        $str .= " AND ";
    }

        list($name, $value) = explode('=', $param, 2);
        if ($name !== NULL && $value !== NULL)
        {
            $str .= $name.' = '.$value;
        }
}

$str = urldecode($str);

function checkData($connection, $DB, $colsName, $data)
{
    try {

        $result = $connection->query("SELECT COUNT(*) FROM `$DB` WHERE `$colsName` = '$data'");
        return $result->rowCount();

    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

function getRows($connection)
{
    try {
        $array = [];

        $rows = $connection->query("
            SELECT
            `shipment`.*
            ,`client`.`name` AS client_name
            ,`equipment`.`name` AS equipment_name
            ,`typeRepairs`.`name` AS typeRepair_name
            ,`category`.`name` AS category_name
            FROM `shipment`
            LEFT JOIN client ON client.id = shipment.idClient
            LEFT JOIN equipment ON equipment.id = shipment.idEquipment
            LEFT JOIN typeRepairs ON typeRepairs.id = shipment.idTypeRepair
            LEFT JOIN category ON category.id = shipment.idCategory
        ");

        while ($row = $rows->fetch(PDO::FETCH_ASSOC)) {
            $array[] = $row;
        }

        http_response_code(200);

        echo json_encode($array);
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

function getFilterRows($connection, $body)
{
    try {
        $array = [];
        $sql = "
            SELECT
            `shipment`.*
            ,`client`.`name` AS client_name
            ,`equipment`.`name` AS equipment_name
            ,`typeRepairs`.`name` AS typeRepair_name
            ,`category`.`name` AS category_name
            FROM `shipment`
            LEFT JOIN client ON client.id = shipment.idClient
            LEFT JOIN equipment ON equipment.id = shipment.idEquipment
            LEFT JOIN typeRepairs ON typeRepairs.id = shipment.idTypeRepair
            LEFT JOIN category ON category.id = shipment.idCategory
            WHERE ".$body;

        $data = $connection->query($sql);

        while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
            $array[] = $row;
        }
        http_response_code(200);

        echo json_encode($array);
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

switch ($method) {
    case "GET":
        if ($str) {
            getFilterRows($connection, $str);
        }
        else {
            getRows($connection);
        }

    break;
}

?>
