var gulp    = require('gulp'),
    include = require('gulp-include'),
    rename  = require("gulp-rename"),
    uglify  = require('gulp-uglify');

gulp.task('default', function() {
  gulp.src('./src/angular-nlp-compromise.js')
    .pipe(include())
    .pipe(gulp.dest('./dist'))
    .pipe(rename('angular-nlp-compromise.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
});
