'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('./styles/sass/base.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename('default.css'))
    .pipe(gulp.dest('./styles'));
});

gulp.task('styles:watch', function () {
  gulp.watch('./styles/sass/**/*.scss', ['sass']);
});
