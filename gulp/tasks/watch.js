module.exports = function () {
    const path = {
        watch: {
            html: '#src/**/*.html', // html
            php: '#src/**/*.php', // php
            scss: '#src/scss/**/*.scss',
            js: '#src/js/**/*.js',
            json: "#src/js/**/*.json",
            fonts: '#src/fonts/*',
            img: '#src/img/**/*',
            htaccess: "#src/.htaccess",

        }
    }

    $.gulp.task('watch', () => {
        $.gulp.watch(path.watch.html, $.gulp.parallel('html'));
        $.gulp.watch(path.watch.php, $.gulp.parallel('php'));
        $.gulp.watch(path.watch.scss, $.gulp.parallel('sass'));
        $.gulp.watch(path.watch.js, $.gulp.parallel('js'));
        $.gulp.watch(path.watch.json, $.gulp.parallel('json'));
        $.gulp.watch(path.watch.js, $.gulp.parallel('scripts'));
        $.gulp.watch(path.watch.fonts, $.gulp.parallel('fonts'));
        $.gulp.watch(path.watch.img, $.gulp.parallel('img'));
        $.gulp.watch(path.watch.htaccess, $.gulp.parallel('htaccess'));
    });

}