<?php

require "../pages-blocks/connection.php";

require "headers.php";
header("Content-type: json/application");

$method = $_SERVER["REQUEST_METHOD"];
$id = $_GET["id"];
$tabsId = $_GET["group"];
$doctorId = $_GET["doctorId"];


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

        $rows = $connection->query("SELECT * FROM `country`");

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
        $sql = "SELECT * FROM `country` WHERE ".$body;
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

        $sql = "DELETE FROM `country` WHERE `country`.`id` = :id";
        $stmt = $connection->prepare($sql);

        $stmt->bindValue(":id", $id);

        if ($stmt->execute()) {
            http_response_code(200);

            $res = [
                "status" => true,
                "id" => $id,
                "message" => "Страна удалена",
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

        $isCountryName = checkData($connection, "country", "name", $_POST["name"]);

        if ($isServicesName < 2) {

            $sql = "INSERT INTO `country` (`id`, `name`) VALUES (NULL, :name)";

            $stmt = $connection->prepare($sql);
            $stmt->bindValue(":name", $_POST["name"]);

            if ($stmt->execute())
            {
                http_response_code(201);
                $res = [
                    "status" => true,
                    "id" => $connection->lastInsertId(),
                    "message" => "Страна добавлена",
                ];

            } else {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Страна не добавлена",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такая страна уже существует"
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

        $isCountryName = checkData($connection, "country", "name", $data["name"]);

        $id = $data["id"];

        if ($isCountryName < 2)
        {
            $sql = "UPDATE `country` SET `name` = :name WHERE `country`.`id` = :id";

            $stmt = $connection->prepare($sql);

            $stmt->bindValue(":id", $id);
            $stmt->bindValue(":name", $data["name"]);

            if ($stmt->execute())
            {
                http_response_code(201);

                $res = [
                    "status" => true,
                    "id" => $data["id"],
                    "message" => "Страна обновлена",
                ];

            }
            else
            {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Страна не обновлена",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такая страна уже существует"
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
