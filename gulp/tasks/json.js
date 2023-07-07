module.exports = function () {

    const path = {
        build: { // готовые после сборки файлы
            js: 'build/Public/js/',
        },
        src: { // исходники
            json: "#src/js/**/[^_]*.json",
        },
    }

    $.gulp.task('json', () => {
        return $.gulp.src(path.src.json)
            .pipe($.gulp.dest(path.build.js))
            .pipe($.browserSync.reload({stream: true}))
    });
}