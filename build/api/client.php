<?php

require "../pages-blocks/connection.php";

require "headers.php";
header("Content-type: json/application");

$method = $_SERVER["REQUEST_METHOD"];
$id = $_GET["id"];
$tabsId = $_GET["group"];
$clientId = $_GET["clientId"];


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

        $rows = $connection->query("SELECT * FROM `client`");

        while ($row = $rows->fetch(PDO::FETCH_ASSOC)) {
            $array[] = $row;
        }

        http_response_code(200);

        echo json_encode($array);
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

function getEquipments ($connection, $clientId)
{

    $res;

    try {
        $array = [];
        $equipmentList;

        $equipmentList = $connection->query("
            SELECT
             `equipment`.`id`
            ,`equipment`.`name`
            ,`equipment`.`year`
            ,`country`.`name` AS countryName
            ,`category`.`name` AS categoryName
            ,`brand`.`name` AS brandName
            FROM `equipment`
            LEFT JOIN country ON country.id = equipment.country
            LEFT JOIN category ON category.id = equipment.category
            LEFT JOIN brand ON brand.id = equipment.brand
            LEFT JOIN client ON client.id = equipment.organization
            WHERE `equipment`.`organization` = $clientId");

        while ($row = $equipmentList->fetch(PDO::FETCH_ASSOC)) {
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
        $sql = "SELECT * FROM `client` WHERE ".$body;
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

function newClient($connection)
{
    $res;
    try {

        $isName = checkData($connection, "client", "name", $_POST["name"]);

        if ($isName < 2) {

            $sql = "INSERT INTO `client` (`id`, `name`, `address`) VALUES (NULL, :name, :address)";

            $_POST["name"] = str_replace("\"", "'", $_POST["name"]);

            $stmt = $connection->prepare($sql);
            $stmt->bindValue(":name", $_POST["name"]);
            $stmt->bindValue(":address", $_POST["address"]);

            if ($stmt->execute())
            {
                http_response_code(201);
                $res = [
                    "status" => true,
                    "id" => $connection->lastInsertId(),
                    "message" => "Клиент добавлен",
                ];

            } else {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Клиент не добавлен",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такой клиент уже существует"
            ];

        }

    echo json_encode($res);

    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

function updateClient($connection, $data)
{
    $res;

    try {

        $isName = checkData($connection, "client", "name", $data["name"]);

        $id = $data["id"];

        if ($isName < 2)
        {
            $sql = "UPDATE `client` SET `name` = :name, `address` = :address WHERE `client`.`id` = :id";

            $stmt = $connection->prepare($sql);

            $data["name"] = str_replace("\"", "'", $data["name"]);

            $stmt->bindValue(":id", $id);
            $stmt->bindValue(":name", $data["name"]);
            $stmt->bindValue(":address", $data["address"]);

            if ($stmt->execute())
            {
                http_response_code(201);

                $res = [
                    "status" => true,
                    "id" => $data["id"],
                    "message" => "Клиент обновлен",
                ];

            }
            else
            {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Клиент не обновлен",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такой клиент уже существует"
            ];

        }
        echo json_encode($res);
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

switch ($method) {
    case "GET":
        if (isset($clientId))
            getEquipments($connection, $clientId);
        else if ($str) {
            getFilterRows($connection, $str);
        }
        else {
            getRows($connection);
        }

    break;
    case "DELETE":
        deleteClient($connection, $tabsId);
    break;
    case "POST":
        newClient($connection);
    break;
    case "PATCH":
        $data = file_get_contents("php://input");
        $data = json_decode($data, true);

        $formType = $data["formType"];

        updateClient($connection, $data);
    break;
}

?>
