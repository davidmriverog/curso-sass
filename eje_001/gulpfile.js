'use strict';

var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    cssmin     = require('gulp-cssmin'),
    shell      = require('gulp-shell'),
    rename     = require('gulp-rename');
    

// define the default task and add the watch task to it
gulp.task('default', ['build-css','build-cssmin']);

gulp.task('build-css',function(){
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

gulp.task('build-cssmin',function(){
  return gulp.src('dist/css/styles.css')
    .pipe(cssmin())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/css'));
});

/*
gulp.task('cleanCMD', shell.task([
  'cd dist/css',
  'rm -f styles.css'
])); */

gulp.task('watch',function(){
  gulp.watch('src/scss/**/*.scss',['build-css']);
});
