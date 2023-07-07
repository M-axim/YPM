<?php

require "../pages-blocks/connection.php";

require "headers.php";
header("Content-type: json/application");

$method = $_SERVER["REQUEST_METHOD"];
$id = $_GET["id"];
$shipment = $_GET["shipment"];


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
            `repairs`.*
            ,`client`.`name` AS client_name
            ,`equipment`.`name` AS equipment_name
            ,`typeRepairs`.`name` AS typeRepair_name
            ,`staff`.`fullName` AS staff_name
            FROM `repairs`
            LEFT JOIN client ON client.id = repairs.client_id
            LEFT JOIN equipment ON equipment.id = repairs.equipment_id
            LEFT JOIN typeRepairs ON typeRepairs.id = repairs.typeRepair_id
            LEFT JOIN staff ON staff.id = repairs.staff_id
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
            `repairs`.*
            ,`client`.`name` AS client_name
            ,`equipment`.`name` AS equipment_name
            ,`typeRepairs`.`name` AS typeRepair_name
            ,`staff`.`fullName` AS staff_name
            FROM `repairs`
            LEFT JOIN client ON client.id = repairs.client_id
            LEFT JOIN equipment ON equipment.id = repairs.equipment_id
            LEFT JOIN typeRepairs ON typeRepairs.id = repairs.typeRepair_id
            LEFT JOIN staff ON staff.id = repairs.staff_id
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

function deleteRow($connection, $id)
{
    $res;

    try {

        $sql = "DELETE FROM `repairs` WHERE `repairs`.`id` = :id";
        $stmt = $connection->prepare($sql);

        $stmt->bindValue(":id", $id);

        if ($stmt->execute()) {
            http_response_code(200);

            $res = [
                "status" => true,
                "id" => $id,
                "message" => "Запись об ремонте удалена",
            ];

        } else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Произошла ошибка при удалении, попробуйте еще раз",
                "error" => $connection->error_info(),
            ];
        }

        echo json_encode($res);
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

function newRow($connection)
{
    $res;
    try {

        $sql = "INSERT INTO `repairs` (`id`, `date_start`, `client_id`, `equipment_id`, `typeRepair_id`, `staff_id`, `date_end`, `price`) VALUES (NULL, :date_start, :client_id, :equipment_id, :typeRepair_id, :staff_id, :date_end, :price)";

        $stmt = $connection->prepare($sql);
        $stmt->bindValue(":date_start", $_POST["date_start"]);
        $stmt->bindValue(":date_end", $_POST["date_end"]);
        $stmt->bindValue(":client_id", $_POST["client_id"]);
        $stmt->bindValue(":equipment_id", $_POST["equipment_id"]);
        $stmt->bindValue(":typeRepair_id", $_POST["typeRepair_id"]);
        $stmt->bindValue(":staff_id", $_POST["staff_id"]);
        $stmt->bindValue(":price", $_POST["price"]);

        if ($stmt->execute())
        {
            http_response_code(201);
            $res = [
                "status" => true,
                "id" => $connection->lastInsertId(),
                "message" => "Запись об ремонте добавлена",
            ];

        } else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Запись об ремонте не добавлена",
                "error" => $connection->error_info(),
            ];
        }
        echo json_encode($res);

    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

function newShipment($connection)
{
    $res;

    $id = $_POST["id"];

    try {

        $sth = "SELECT date_end FROM `repairs` WHERE id = :id";

        $stmt = $connection->prepare($sth);
        $stmt->bindValue(":id", $id);

        $stmt->execute();

        if ($stmt->fetchColumn())
        {
            $array = [];

            $repairAct = $connection->query("
                SELECT
                `repairs`.`client_id`
                ,`repairs`.`equipment_id`
                ,`repairs`.`typeRepair_id`
                ,`repairs`.`date_end`
                ,`category`.`id` AS category_id
                ,`client`.`address` AS address
                FROM `repairs`
                LEFT JOIN equipment ON equipment.id = repairs.equipment_id
                LEFT JOIN client ON client.id = repairs.client_id
                LEFT JOIN category ON category.id = equipment.category
                WHERE repairs.id = $id
            ")->fetch(PDO::FETCH_ASSOC);

            $address = $_POST["address"];

            if ($address)
                $repairAct["address"] = $address;

            $sql = "INSERT INTO `shipment` (`id`, `idClient`, `idEquipment`, `idCategory`, `idTypeRepair`, `date_end`, `address`) VALUES (NULL, :client_id, :equipment_id, :category_id, :typeRepair_id, :date_end, :address)";

            $stmt = $connection->prepare($sql);
            $stmt->bindValue(":client_id", $repairAct["client_id"]);
            $stmt->bindValue(":equipment_id", $repairAct["equipment_id"]);
            $stmt->bindValue(":category_id", $repairAct["category_id"]);
            $stmt->bindValue(":typeRepair_id", $repairAct["typeRepair_id"]);
            $stmt->bindValue(":date_end", $repairAct["date_end"]);
            $stmt->bindValue(":address", $repairAct["address"]);

            if ($stmt->execute())
            {
                http_response_code(201);
                $res = [
                    "status" => true,
                    "id" => $connection->lastInsertId(),
                    "message" => "Акт об отгрузке создан",
                ];

            } else {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Произошла ошибка при создании акта отгрузки",
                    "error" => $connection->error_info(),
                ];
            }
        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Ремонт еще не закончен",
            ];
        }

        echo json_encode($res);


    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }

}

function updateRow($connection, $data)
{
    $res;

    try {
        $id = $data["id"];

        $sql = "UPDATE `repairs` SET `date_start` = :date_start, `date_end` = :date_end, `client_id` = :client_id, `equipment_id` = :equipment_id, `typeRepair_id` = :typeRepair_id, `staff_id` = :staff_id, `price` = :price WHERE `repairs`.`id` = :id";

        $stmt = $connection->prepare($sql);

        $stmt->bindValue(":id", $id);
        $stmt->bindValue(":date_start", $data["date_start"]);
        $stmt->bindValue(":client_id", $data["client_id"]);
        $stmt->bindValue(":equipment_id", $data["equipment_id"]);
        $stmt->bindValue(":typeRepair_id", $data["typeRepair_id"]);
        $stmt->bindValue(":staff_id", $data["staff_id"]);
        $stmt->bindValue(":price", $data["price"]);
        $stmt->bindValue(":date_end", $data["date_end"]);

        if ($stmt->execute())
        {
            http_response_code(201);

            $res = [
                "status" => true,
                "id" => $data["id"],
                "message" => "Запись об ремонте обновлена",
            ];

        }
        else
        {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Запись об ремонте не обновлена",
                "error" => $connection->error_info(),
            ];
        }
        echo json_encode($res);
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
    case "DELETE":
        deleteRow($connection, $id);
    break;
    case "POST":
        if ($shipment)
            newShipment($connection);
        else
            newRow($connection);
    break;
    case "PATCH":
        $data = file_get_contents("php://input");
        $data = json_decode($data, true);

        updateRow($connection, $data);
    break;
}

?>
