<?php
//// Регистрируем 2 новых меню
//function register_my_menus() {
//    register_nav_menus(array (
//        'header-link-left' => 'header-link1', // header-link-left меню к которому мы обращаемся в админке
//        'header-link-right' => 'header-link2',
//));
//}
//// Регистрируем меню выше
//if (function_exists(('register_my_menus')) {
//add_action('init', 'register_my_menus')
//});
//
// Активизирует новые возможности wordpress
//add_action( 'after_setup_theme', 'add_theme_supports' );
//function add_theme_supports() {
//    add_theme_support( 'post-thumbnails', array( 'post' ) ); Поддержка фоток в post
//    add_custom_background();Поддержка своего фонового изображения
//}

//add_theme_support( 'post-thumbnails', array( 'post' ) );

//wp_nav_menu(array( // Функцию для добавления своих меню
//    'theme_location'  => 'header-link-left',
//    'container'       => 'div',
//    'container_class' => 'nav__links',
//    'items_wrap'        => '%3$s',
//));
//
//?>
<!---->
<!--<!-- получаем директорию до исходного файла -->-->
<?php //echo get_template_directory_uri() ?>
<!--<!-- получаем названия файла из админки -->-->
<?php //bloginfo('name') ?><!-- <!--'description' вывести заголовок-->-->
<!--<!---->-->
<?php
////$args = array('new' => 4);
//$category_posts = new WP_Query($args);
//
///* Цикл для вывода постов */
//if($category_posts->have_posts()) : пост
//    while($category_posts->have_posts()) : 'category_post'-может быть любой другой функцией главное не забыть ее использовать в качестве метода
//        $category_posts->the_post();
//        ?>
<!--        <div class='slider-item__info'> код который надо выводить-->-->
<!--            <div class='slider-item__info__photo'>-->
<!--                --><?php //the_post_thumbnail(); ?>
<!--            </div>-->
<!--            <div class='slider-item__info__title'>-->
<!--                <h1>--><?php //the_title(); ?><!--</h1>-->
<!--            </div>-->
<!--            <div class='category.php _intro container'>-->
<!--                <p>--><?php //the_tags( '', ' / ') ?><!--</p>-->
<!--            </div>-->
<!--            <div class='info-date _intro container'>-->
<!--                <p>--><?php //the_time('F jS, Y') ?><!--<span>&#124;</span> <a href='#'>--><?php //the_content() ?><!--</a></p>-->
<!---->
<!--            </div>-->
<!--        </div>-->
<!--    --><?php
////    endwhile; заканчиваем цикл
//endif; останавливаем if
//?>
<!---->
<!--Приложения для записи данных в бд-->
<!--$stmt = $pdo->prepare("INSERT INTO nav (link_4) values ('$l')"); // $pdo-переменная которая подключена к бд nav(бд),link_4(место куда записывать данные),$l(переменная в которой есть данные для записи)-->
<!--$stmt->execute();-->
<?php

//функция для добавления постов на html страницу по имени категории block1
//$query = new WP_Query( [ 'category_name' => 'block1' ] ); ?>
<!---->
<?php //if ( $query->have_posts() ) : ?>
<!---->
<!--    <!-- пагинация -->-->
<!---->
<!--    <!-- цикл -->-->
<!--    --><?php //while ( $query->have_posts() ) : $query->the_post(); ?>
<!--        <div class='about__col'>-->
<!--            <div class='about__row__icon'>-->
<!--                --><?php //the_post_thumbnail(); ?>
<!--            </div>-->
<!--            <div class='about__row__title'>-->
<!--                <h3>--><?php //the_title(); ?><!--</h3>-->
<!--            </div>-->
<!--            <div class='about__row__text'>-->
<!--                --><?php //the_excerpt(); ?>
<!--            </div>-->
<!--        </div>-->
<!--    --><?php //endwhile; ?>
<!--    <!-- конец цикла -->-->
<!---->
<!--    <!-- пагинация -->-->
<!---->
<!--    --><?php //wp_reset_postdata(); ?>
<!---->
<?php //else : ?>
<!--    <p>--><?php //esc_html_e( 'Нет постов по вашим критериям.' ); ?><!--</p>-->
<?php //endif; ?>

<!--//дополнительное миниатюрное фото.Нужно установить плагин MultiPostThumbnails-->
<!--if (class_exists('MultiPostThumbnails')) {-->
<!---->
<!--new MultiPostThumbnails(array(-->
<!--'label' => 'Secondary Image',-->
<!--'id' => 'secondary-image',-->
<!--'post_type' => 'post'-->
<!--) );-->
<!---->
<!--}-->
<!--код чтобы отобразить второе фото вставлять в то место где должно быть фото-->
<?php //if (class_exists('MultiPostThumbnails' )) : MultiPostThumbnails::the_post_thumbnail(get_post_type(), 'secondary-image', NULL, '',  array('class' => 'arrow-left svg')); endif; ?>