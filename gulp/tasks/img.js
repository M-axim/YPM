module.exports = function () {

    const imagemin = require('gulp-imagemin'),
        imgCompress = require('imagemin-jpeg-recompress'),
        webp = require('gulp-webp');

    const path = {
        build: { // готовые после сборки файлы
            img: 'build/img/'
        },
        src: { // исходники
            img: '#src/img/**/*'
        },
    };

    $.gulp.task('img', () => {
        return $.gulp.src(path.src.img)
            .pipe(imagemin([
                imgCompress({
                    loops: 4,
                    min: 70,
                    max: 80,
                    quality: 'high'
                }),
                imagemin.optipng(),
                imagemin.svgo(),
            ]))
            .pipe($.gulp.dest(path.build.img))
            .pipe(webp({
                quality: 70
            }))
            .pipe($.gulp.dest(path.build.img))
            .pipe($.browserSync.reload({stream: true}))
    });
}