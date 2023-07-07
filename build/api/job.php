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

        $rows = $connection->query("SELECT * FROM `JobTitle`");

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
        $sql = "SELECT * FROM `JobTitle` WHERE ".$body;
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

        $sql = "DELETE FROM `JobTitle` WHERE `JobTitle`.`id` = :id";
        $stmt = $connection->prepare($sql);

        $stmt->bindValue(":id", $id);

        if ($stmt->execute()) {
            http_response_code(200);

            $res = [
                "status" => true,
                "id" => $id,
                "message" => "Должность удалена",
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

        $isJobTitleName = checkData($connection, "JobTitle", "name", $_POST["name"]);

        if ($isJobTitleName < 2) {

            $sql = "INSERT INTO `JobTitle` (`id`, `name`, `salary`) VALUES (NULL, :name, :salary)";

            $stmt = $connection->prepare($sql);
            $stmt->bindValue(":name", $_POST["name"]);
            $stmt->bindValue(":salary", $_POST["salary"]);

            if ($stmt->execute())
            {
                http_response_code(201);
                $res = [
                    "status" => true,
                    "id" => $connection->lastInsertId(),
                    "message" => "Должность добавлена",
                ];

            } else {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Должность не добавлена",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такая должность уже существует"
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

        $isCountryName = checkData($connection, "JobTitle", "name", $data["name"]);

        $id = $data["id"];

        if ($isCountryName < 2)
        {
            $sql = "UPDATE `JobTitle` SET `name` = :name, `salary` = :salary WHERE `JobTitle`.`id` = :id";

            $stmt = $connection->prepare($sql);

            $stmt->bindValue(":id", $id);
            $stmt->bindValue(":name", $data["name"]);
            $stmt->bindValue(":salary", $data["salary"]);

            if ($stmt->execute())
            {
                http_response_code(201);

                $res = [
                    "status" => true,
                    "id" => $data["id"],
                    "message" => "Должность обновлена",
                ];

            }
            else
            {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Должность не обновлена",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такая должность уже существует"
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
