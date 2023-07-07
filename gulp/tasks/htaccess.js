module.exports = function () {

    const path = {
    build: { // готовые после сборки файлы
        php: 'build/'
    },
    src: { // исходники
        htaccess: "#src/.htaccess"
    },
};

    $.gulp.task('htaccess', () => {
        return $.gulp.src(path.src.htaccess)
            .pipe($.gulp.dest(path.build.php))
            .pipe($.browserSync.reload({stream: true}))
    });
}