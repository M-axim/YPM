module.exports = function () {
    const minCss = require('gulp-minify-css')

    const path = {
        build: { // готовые после сборки файлы
            css: 'build/css/',
        }
    }

    $.gulp.task('css:lib', () => {
        return $.gulp.src(['node_modules//slick-carousel//slick//slick.css'])
            .pipe($.concat('libs.css'))
            .pipe(minCss())
            .pipe($.gulp.dest(path.build.css))
            .pipe($.browserSync.reload({stream: true}))
    });


// css:libs: ['node_modules//slick-carousel//slick//slick.css',
//           'node_modules/magnific-popup/dist/magnific-popup.css,
//           'node_modules/bootstrap/dist/css/bootstrap-grid.css']

}