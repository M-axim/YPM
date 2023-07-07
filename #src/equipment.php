<!doctype html>
<!-- Оболочка документа, указываем язык содержимого -->
<html lang="ru">
<!-- Заголовок страницы, контейнер для других важных данных -->
<head>
    <?php include "pages-blocks/head-block.php"?>
    <!-- Заголовок страницы в браузере -->
    <title>Оборудования</title>
</head>
<!-- Отображаемое тело страницы -->
<body class="body" id="body">
<!-- wrapper -->
<div class="wrapper">
    <?php include "pages-blocks/header.php"?>
    <main class="main">
        <div class="main__body _container">

            <div class="main__top top-main">

                <div class="top-main__view">
                    <h2 class="top-main__title" data-header="top-main__header">Оборудования</h2>
                </div>

            </div>

            <?php include "pages-blocks/equipment.php"?>

            <?php include "pages-blocks/footer.php"?>
        </div>
    </main>
</div>
<!-- scripts -->
<?php include "pages-blocks/scripts.php"?>

