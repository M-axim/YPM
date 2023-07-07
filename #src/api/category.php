<?php

require "../pages-blocks/connection.php";

require "headers.php";
header("Content-type: json/application");

$method = $_SERVER["REQUEST_METHOD"];
$id = $_GET["id"];
$tabsId = $_GET["group"];


$query = explode('&', $_SERVER['QUERY_STRING']);

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

        $tabs = $connection->query("SELECT `categoryTabs`.`id` as tabsId, `categoryTabs`.`pid`, `categoryTabs`.`title` FROM `categoryTabs`
            WHERE categoryTabs.id != 0
            ORDER BY categoryTabs.id ASC");

        $data = $connection->query("
            SELECT `category`.*, `categoryTabs`.`pid`, `categoryTabs`.`title`, `categoryTabs`.`id` as tabsId
            FROM category
            LEFT JOIN categoryTabs ON categoryTabs.id = category.tab");

        while ($row = $tabs->fetch(PDO::FETCH_ASSOC)) {
            $array[] = $row;
        }

        while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
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

        $tabs = $connection->query("SELECT `categoryTabs`.`id` as tabsId, `categoryTabs`.`pid`, `categoryTabs`.`title` FROM `categoryTabs`
            WHERE categoryTabs.id != 0
            ORDER BY categoryTabs.id ASC");

        $data = $connection->query("
            SELECT `category`.*, `categoryTabs`.`pid`, `categoryTabs`.`title`, `categoryTabs`.`id` as tabsId
            FROM category
            LEFT JOIN categoryTabs ON categoryTabs.id = category.tab
            WHERE ".$body);

        while ($row = $tabs->fetch(PDO::FETCH_ASSOC)) {
            $array[] = $row;
        }

        while ($row = $data->fetch(PDO::FETCH_ASSOC)) {
            $array[] = $row;
        }

        http_response_code(200);

        echo json_encode($array);
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

function getGroups ($connection, $tabsId)
{
    try {
        $array = [];
        $tabsList;

            if ($tabsId === "0")
            {
                $tabsList = $connection->query("SELECT * FROM `categoryTabs`
                ORDER BY categoryTabs.id ASC");
            }
            else {
                $tabsList = $connection->query("
                    WITH RECURSIVE managertree AS (
                    SELECT id, pid, title
                    FROM `categoryTabs`
                    WHERE `categoryTabs`.`id` = $tabsId
                    UNION ALL
                    SELECT e.id, e.pid, e.title
                    FROM `categoryTabs` e
                    INNER JOIN managertree mtree ON mtree.id = e.pid
                    )
                    select * from managertree
                    ORDER BY pid");
            }

        while ($row = $tabsList->fetch(PDO::FETCH_ASSOC)) {
            $array[] = $row;
        }

        http_response_code(200);

        echo json_encode($array);
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

function deleteGroup($connection, $tabsId)
{
    $res;

    try {

        $groupCount = $connection->query("SELECT COUNT(*) as count FROM `category` WHERE tab = $tabsId");

        $groupsCount = $connection->query("WITH RECURSIVE managertree AS (
                    SELECT id, pid, title
                    FROM `categoryTabs`
                    WHERE `categoryTabs`.`id` = $tabsId
                    UNION ALL
                    SELECT e.id, e.pid, e.title
                    FROM `categoryTabs` e
                    INNER JOIN managertree mtree ON mtree.id = e.pid
                    )
                    select COUNT(*) as countGroup from managertree");

        $cntServ = 0;
        $cntGrp = 0;

        while ($cnt = $groupCount->fetch(PDO::FETCH_ASSOC)) {
            $cntServ = $cnt["count"];
        }

        while ($groupCnt = $groupsCount->fetch(PDO::FETCH_ASSOC)) {
            $cntGrp = $groupCnt["countGroup"];
        }

        if ($cntGrp === "1" && $cntServ === "0")
        {

            $delGroup = $connection->query("DELETE FROM categoryTabs WHERE `categoryTabs`.`id` = $tabsId");

            if ($delGroup)
            {
                http_response_code(200);

                $res = [
                    "status" => true,
                    "id" => $tabsId,
                    "message" => "Группа удалена",
                ];
            }
            else {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "id" => $tabsId,
                    "message" => "Произошла ошибка при удалении группы",
                    "error" => $connection->error_info()
                ];
            }

        } else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Выбранная группа не должна имеет вложенность",
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

        $isTypeRepairName = checkData($connection, "category", "name", $_POST["name"]);

        if ($isTypeRepairName < 2) {

            $sql = "INSERT INTO `category` (`id`, `name`, `tab`) VALUES (NULL, :name, :tab)";

            $stmt = $connection->prepare($sql);
            $stmt->bindValue(":name", $_POST["name"]);
            $stmt->bindValue(":tab", $_POST["listGroup"]);

            if ($stmt->execute())
            {
                http_response_code(201);
                $res = [
                    "status" => true,
                    "id" => $connection->lastInsertId(),
                    "message" => "Категория добавлена",
                ];

            } else {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Категория не добавлена",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такая категория уже существует"
            ];

        }

    echo json_encode($res);

    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

function newGroup($connection)
{
    $res;
    try {

        $isGroupName = checkData($connection, "categoryTabs", "title", $_POST["groupName"]);

        if ($isGroupName < 2)
        {

            $sql = "INSERT INTO `categoryTabs` (`id`, `pid`, `title`) VALUES (NULL, :pid, :title)";

            $stmt = $connection->prepare($sql);
            $stmt->bindValue(":title", $_POST["groupName"]);
            $stmt->bindValue(":pid", $_POST["listGroups"]);

            if ($stmt->execute())
            {
                http_response_code(201);

                $res = [
                    "status" => true,
                    "id" => $connection->lastInsertId(),
                    "message" => "Группа добавлена",
                ];
            }
            else
            {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Группа не добавлена",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такая группа уже существует"
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

        $isCategoryName = checkData($connection, "category", "name", $data["name"]);

        $id = $data["id"];

        if ($isCategoryName < 2)
        {
            $sql = "UPDATE `category` SET `tab` = :tab, `name` = :name WHERE `category`.`id` = :id";

            $stmt = $connection->prepare($sql);

            $stmt->bindValue(":id", $id);
            $stmt->bindValue(":name", $data["name"]);
            $stmt->bindValue(":tab", $data["listGroup"]);

            if ($stmt->execute())
            {
                http_response_code(201);

                $res = [
                    "status" => true,
                    "id" => $data["id"],
                    "message" => "Категория обновлена",
                ];

            }
            else
            {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Категория не обновлена",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такая категория уже существует"
            ];

        }
        echo json_encode($res);
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}

function updateGroup($connection, $data)
{
    $res;

    try {

        $isGroupName = checkData($connection, "categoryTabs", "title", $data["groupName"]);

        $id = $data["id"];
        if ($isGroupName < 2)
        {
            $sql = "UPDATE `categoryTabs` SET `title` = :tabsTitle WHERE `categoryTabs`.`id` = :id";

            $stmt = $connection->prepare($sql);

            $stmt->bindValue(":id", $id);
            $stmt->bindValue(":tabsTitle", $data["groupName"]);

            if ($stmt->execute())
            {
                http_response_code(201);

                $res = [
                    "status" => true,
                    "id" => $data["id"],
                    "message" => "Группа обновлена",
                ];

            }
            else
            {
                http_response_code(500);

                $res = [
                    "status" => false,
                    "message" => "Группа не обновлена",
                    "error" => $connection->error_info(),
                ];
            }

        }
        else {
            http_response_code(500);

            $res = [
                "status" => false,
                "message" => "Такая группа уже существует"
            ];

        }
        echo json_encode($res);
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage();
    }
}


switch ($method) {
    case "GET":
        if (isset($tabsId))
            getGroups($connection, $tabsId);
        else if ($str) {
            getFilterRows($connection, $str);
        }
        else {
            getRows($connection);
        }

    break;
    case "DELETE":
        if ($tabsId)
            deleteGroup($connection, $tabsId);
        else
            deleteService($connection, $id);
    break;
    case "POST":
        if ($_POST["formType"] === "addGroup")
            newGroup($connection);
        else
            newRow($connection);
    break;
    case "PATCH":
        $data = file_get_contents("php://input");
        $data = json_decode($data, true);

        $formType = $data["formType"];

        if ($formType === "edit")
            updateRow($connection, $data);
        else
            updateGroup($connection, $data);
    break;
}

?>
