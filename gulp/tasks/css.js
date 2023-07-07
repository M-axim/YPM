module.exports = function () {
    const
        sass = require('gulp-sass'),
        minCss = require('gulp-minify-css'),
        autoPrefixer = require('gulp-autoprefixer'),
        rename = require('gulp-rename'),
        cleanCss = require('gulp-clean-css'),
        gcmq = require('gulp-group-css-media-queries'),
        webpcss = require("gulp-webp-css");

    const path = {
        build: { // готовые после сборки файлы
            css: 'build/css/',
            // Acss: 'build/admin/',
        },
        src: { // исходники
            scss: '#src/scss/style.scss',
            // Ascss: '#src/admin/*.scss',
        },
    }

    $.gulp.task('sass', () => {
        return $.gulp.src(path.src.scss)
            .pipe(sass({
                outputStyle: "expanded"
            }))
            .pipe(autoPrefixer({
                overrideBrowserslist: ["last 15 version"],
                cascade: true
            }))
            .pipe(gcmq())
            .pipe(webpcss())
            .pipe($.gulp.dest(path.build.css))
            .pipe(minCss())
            .pipe(cleanCss({level: {1: {specialComments: 0}}}))
            .pipe(rename({suffix: '.min'}))
            .pipe($.gulp.dest(path.build.css))
            .pipe($.browserSync.reload({stream: true}))
    });
}