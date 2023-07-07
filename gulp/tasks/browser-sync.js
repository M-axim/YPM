module.exports = function () {
    const rimraf = require('rimraf')

    const path = {
        clean: './build'
    };

    $.gulp.task('clean', (cb) => {
        rimraf(path.clean, cb)
    });

    $.gulp.task('browser-sync', () => {
        $.browserSync.init({
             //server: {
              //   baseDir: './build/Views'
            //},
            proxy: 'http://medicine/build/',
            notify: false
        });
    });
}