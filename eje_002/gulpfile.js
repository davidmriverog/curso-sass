'use strict';

var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    cssmin     = require('gulp-cssmin'),
    concatCss  = require('gulp-concat-css'),
    rename     = require('gulp-rename');
    

// define the default task and add the watch task to it
gulp.task('default', ['build-css']);

gulp.task('build-css',function(){
  return gulp.src(['src/scss/**/*.scss','src/scss/**/*.sass'])
    .pipe(sass())
    .pipe(concatCss('theme.css'))
    .pipe(cssmin())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch',function(){
  gulp.watch(['src/scss/**/*.scss','src/scss/**/*.sass'],['build-css']);
});
