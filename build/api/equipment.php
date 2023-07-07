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
            `equipment`.*
            ,`country`.`name` AS countryName
            ,`category`.`name` AS categoryName
            ,`client`.`name` AS organizationName
            ,`brand`.`name` AS brandName
            FROM `equipment`
            LEFT JOIN country ON country.id = equipment.country
            LEFT JOIN category ON category.id = equipment.category
            LEFT JOIN client ON client.id = equipment.organization
            LEFT JOIN brand ON brand.id = equipment.brand
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
        $sql = "SELECT
            `equipment`.*
            ,`country`.`name` AS countryName
            ,`category`.`name` AS categoryName
            ,`client`.`name` AS organizationName
            ,`brand`.`name` AS brandName
            FROM `equipment`
            LEFT JOIN country ON country.id = equipment.country
            LEFT JOIN category ON category.id = equipment.category
            LEFT JOIN client ON client.id = equipment.organization
            LEFT JOIN brand ON brand.id = equipment.brand
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

        $sql = "DELETE FROM `equipment` WHERE `equipment`.`id` = :id";
        $stmt = $connection->prepare($sql);

        $stmt->bindValue(":id", $id);

        if ($stmt->execute()) {
            http_response_code(200);

            $res = [
                "status" => true,
                "id" => $id,
                "message" => "Оборудование удалено",
            ];

        } else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Произошла ошибки при удалении, попробуйте еще раз",
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

        $sql = "INSERT INTO `equipment` (`id`, `name`, `brand`, `country`, `year`, `category`, `organization`) VALUES (NULL, :name, :brand, :country, :year, :category, :organization)";

        $stmt = $connection->prepare($sql);
        $stmt->bindValue(":name", $_POST["name"]);
        $stmt->bindValue(":brand", $_POST["brand"]);
        $stmt->bindValue(":year", $_POST["year"]);
        $stmt->bindValue(":country", $_POST["country"]);
        $stmt->bindValue(":category", $_POST["category"]);
        $stmt->bindValue(":organization", $_POST["organization"]);

        if ($stmt->execute())
        {

            http_response_code(201);
            $res = [
                "status" => true,
                "id" => $connection->lastInsertId(),
                "message" => "Оборудование добавлено",
            ];

        } else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Оборудование не добавлено",
                "error" => $connection->error_info(),
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

        $sql = "UPDATE `equipment` SET `name` = :name, `brand` = :brand, `country` = :country, `year` = :year, `category` = :category, `organization` = :organization WHERE `equipment`.`id` = :id";

        $stmt = $connection->prepare($sql);

        $stmt->bindValue(":id", $id);
        $stmt->bindValue(":name", $data["name"]);
        $stmt->bindValue(":brand", $data["brand"]);
        $stmt->bindValue(":country", $data["country"]);
        $stmt->bindValue(":year", $data["year"]);
        $stmt->bindValue(":category", $data["category"]);
        $stmt->bindValue(":organization", $data["organization"]);

        if ($stmt->execute())
        {
            http_response_code(201);

            $res = [
                "status" => true,
                "id" => $data["id"],
                "message" => "Оборудование обновлено",
            ];

        }
        else
        {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Оборудование не обновлено",
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
        newRow($connection);
    break;
    case "PATCH":
        $data = file_get_contents("php://input");
        $data = json_decode($data, true);

        updateRow($connection, $data);
    break;
}

?>
