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

        $rows = $connection->query("
            SELECT `staff`.`id`, `staff`.`fullName`, `staff`.`tel`, `staff`.`JobTitleId`, `JobTitle`.`name` as `JobTitleName`
            FROM staff
            LEFT JOIN JobTitle ON JobTitle.id = staff.JobTitleId");

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
        $sql = "SELECT `staff`.`id`, `staff`.`fullName`, `staff`.`tel`, `staff`.`JobTitleId`, `JobTitle`.`name` as `JobTitleName`
            FROM staff
            LEFT JOIN JobTitle ON JobTitle.id = staff.JobTitleId WHERE ".$body;
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

        $sql = "DELETE FROM `staff` WHERE `staff`.`id` = :id";
        $stmt = $connection->prepare($sql);

        $stmt->bindValue(":id", $id);

        if ($stmt->execute()) {
            http_response_code(200);

            $res = [
                "status" => true,
                "id" => $id,
                "message" => "Сотрудник удален",
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

        $isStaffFullName = checkData($connection, "staff", "fullName", $_POST["fullName"]);

        if ($isStaffFullName < 2) {

            $sql = "INSERT INTO `staff` (`id`, `fullName`, `JobTitleId`, `tel`) VALUES (NULL, :fullName, :jobTitle, :tel)";

            $stmt = $connection->prepare($sql);
            $stmt->bindValue(":fullName", $_POST["fullName"]);
            $stmt->bindValue(":jobTitle", $_POST["JobTitleId"]);
            $stmt->bindValue(":tel", $_POST["tel"]);

            if ($stmt->execute())
            {
                http_response_code(201);
                $res = [
                    "status" => true,
                    "id" => $connection->lastInsertId(),
                    "message" => "Сотрудник добавлен",
                ];

            } else {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Сотрудник не добавлен",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такой сотрудник уже существует"
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

        $isStaffFullName = checkData($connection, "staff", "fullName", $data["fullName"]);

        $id = $data["id"];

        if ($isStaffFullName < 2)
        {
            $sql = "UPDATE `staff` SET `fullName` = :fullName, `JobTitleId` = :jobTitle, `tel` = :tel WHERE `staff`.`id` = :id";

            $stmt = $connection->prepare($sql);

            $stmt->bindValue(":id", $id);
            $stmt->bindValue(":fullName", $data["fullName"]);
            $stmt->bindValue(":jobTitle", $data["JobTitleId"]);
            $stmt->bindValue(":tel", $data["tel"]);

            if ($stmt->execute())
            {
                http_response_code(201);

                $res = [
                    "status" => true,
                    "id" => $data["id"],
                    "message" => "Сотрудник обновлен",
                ];

            }
            else
            {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Сотрудник не обновлен",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такой сотрудник уже существует"
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
