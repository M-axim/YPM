module.exports = function () {

    const
        ttf2woff = require('gulp-ttf2woff'),
        ttf2woff2 = require('gulp-ttf2woff2'),
        fonter = require('gulp-fonter');

    const path = {
        build: { // готовые после сборки файлы
            fonts: 'build/fonts/'
        },
        src: { // исходники
            fonts: '#src/fonts/*'
        }
    };

    $.gulp.task('fonts', () => {
        $.gulp.src(path.src.fonts)
            .pipe($.gulp.dest(path.build.fonts))
        $.gulp.src(path.src.fonts)
            .pipe(ttf2woff())
            .pipe($.gulp.dest(path.build.fonts))
        $.gulp.src(path.src.fonts)
            .pipe(ttf2woff2())
            .pipe($.gulp.dest(path.build.fonts))
        // $.gulp.src(path.src.fonts)
        //     .pipe(fonter({
        //         formats: ["ttf", "eot"]
        //     }))
        //     .pipe($.gulp.dest(path.build.fonts))
            .pipe($.browserSync.reload({stream: true}))
    });
}