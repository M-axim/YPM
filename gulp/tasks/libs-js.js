module.exports = function () {
    // const concat = require('gulp-concat');

    const path = {
        build: { // готовые после сборки файлы
            js: 'build/js',
        },
        src: { // исходники
            js: "#src/js/main.js",
        },
    }

    $.gulp.task('scripts', () => {
    return $.gulp.src(path.src.js)
        .pipe($.gulp.dest(path.build.js))
        .pipe($.browserSync.reload({stream: true}))
});

    $.gulp.task('scripts:lib', () => {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js'])
            .pipe($.concat('libs.min.js'))
            .pipe($.gulp.dest(path.build.js))
            .pipe($.browserSync.reload({stream: true}))
    });

    // scripts:lib: ['node_modules/jquery/dist/jquery.min.js',
    //              'node_modules//slick-carousel//slick//slick.min.js',
    //              'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    //              'node_modules/bootstrap/dist/js/bootstrap.min.js',
    //              'php/node_modules/blowup/lib/blowup.min.js'] -- увеличение области при наведение на jQury
    //              'node_modules/@popperjs/core/dist/umd/popper.min.js']

}