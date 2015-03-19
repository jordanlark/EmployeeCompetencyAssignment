var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');

gulp.task('vet', function() {
  return gulp.src('./routes/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./public/js'));
});

gulp.task('test', function(){
  return gulp.src('./test/test.js', {read: false})
  .pipe(mocha({reporter: 'nyan'}));
});
