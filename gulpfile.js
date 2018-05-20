var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('home.min.css').on('error', concat.logError))
        .pipe(gulp.dest('./dist/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('./src/scss/**/*.scss', ['styles']);
});