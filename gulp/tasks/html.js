module.exports = function () {
    const
        fileInclude = require('gulp-file-include'),
        webpHTML = require('gulp-webp-html')

    const path = {
        build: { // готовые после сборки файлы
            php: 'build/',
        },
        src: { // исходники
            html: '#src/Views/*.html', //[^_]*.php
            php: '#src/**/[^_]*.php', //[^_]*.php
        },
    };

    $.gulp.task('html', () => {
        return $.gulp.src(path.src.html)
            .pipe(fileInclude()) //@@include('pages/pages-blocks/help.html')
            .pipe(webpHTML())
            .pipe($.gulp.dest(path.build.php))
            .pipe($.browserSync.reload({stream: true}))
    });

    $.gulp.task('php', () => {
        return $.gulp.src(path.src.php)
            // .pipe(webpHTML())
            .pipe($.gulp.dest(path.build.php))
            .pipe($.browserSync.reload({stream: true}))
    });
}