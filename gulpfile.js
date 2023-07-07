"use strict";

global.$ = {
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    concat: require('gulp-concat'),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }

};

$.path.tasks.forEach(function (tasksPath) {
    require(tasksPath)();
})

$.gulp.task('build', $.gulp.parallel('php', 'sass', 'js', 'json', 'img')) // 'php', 'htaccess'

$.gulp.task('default', $.gulp.series(
    'clean','scripts:lib', 'scripts',//css:lib, scripts:lib
    $.gulp.parallel('build'),
    $.gulp.parallel('fonts', 'browser-sync', 'watch'),
));