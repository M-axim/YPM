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

        $rows = $connection->query("SELECT * FROM `brand`");

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
        $sql = "SELECT * FROM `brand` WHERE ".$body;
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

        $sql = "DELETE FROM `brand` WHERE `brand`.`id` = :id";
        $stmt = $connection->prepare($sql);

        $stmt->bindValue(":id", $id);

        if ($stmt->execute()) {
            http_response_code(200);

            $res = [
                "status" => true,
                "id" => $id,
                "message" => "Модель удалена",
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

        $isBrandName = checkData($connection, "brand", "name", $_POST["name"]);

        if ($isBrandName < 2) {

            $sql = "INSERT INTO `brand` (`id`, `name`) VALUES (NULL, :name)";

            $stmt = $connection->prepare($sql);
            $stmt->bindValue(":name", $_POST["name"]);

            if ($stmt->execute())
            {
                http_response_code(201);
                $res = [
                    "status" => true,
                    "id" => $connection->lastInsertId(),
                    "message" => "Модель добавлена",
                ];

            } else {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Модель не добавлена",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такая модель уже существует"
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

        $isBrandName = checkData($connection, "brand", "name", $data["name"]);

        $id = $data["id"];

        if ($isBrandName < 2)
        {
            $sql = "UPDATE `brand` SET `name` = :name WHERE `brand`.`id` = :id";

            $stmt = $connection->prepare($sql);

            $stmt->bindValue(":id", $id);
            $stmt->bindValue(":name", $data["name"]);

            if ($stmt->execute())
            {
                http_response_code(201);

                $res = [
                    "status" => true,
                    "id" => $data["id"],
                    "message" => "Модель обновлена",
                ];

            }
            else
            {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Модель не обновлена",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такая модель уже существует"
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
