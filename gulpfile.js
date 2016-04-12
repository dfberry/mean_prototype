var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
  return gulp.
    src('./client/js/app.js').
    pipe(browserify()).
    pipe(gulp.dest('./public'));
});

gulp.task('watch', function() {
  gulp.watch(['./client/js/*.js'], ['browserify']);
});