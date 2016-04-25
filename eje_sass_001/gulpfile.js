'use strict';

var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    concatCss     = require('gulp-concat-css'),
    cssmin        = require('gulp-cssmin'),
    rename        = require('gulp-rename'),
    livereload    = require('gulp-livereload');

gulp.task('build-css',function(){
  gulp.src('src/scss/**/*.sass')
    .pipe(sass())
    .pipe(concatCss('theme.css'))
    .pipe(cssmin())
    .pipe(rename({suffix:'.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(gulp.dest(''))
    .pipe(livereload());
});

gulp.task('watch',function(){
  livereload.listen();
  gulp.watch('src/scss/**/*.sass',['build-css']);
  gulp.watch('*.html',['html']);
});

// iniciamos nuestro gestor automatico de tareas multiples.
gulp.task('default',['build-css','html','watch']);
