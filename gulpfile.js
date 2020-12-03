const { src, dest, series, parallel } = require("gulp");
const postcss = require('gulp-postcss');
// const cssnano = require('cssnano');
const cleancss = require('gulp-clean-css');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

// html task

function htmlTask() {
  return src('src/*html')
    .pipe(dest('dist/'))
}

// scripts task

function scriptsTask() {
  return src('src/js/*.js')
    .pipe(dest('dist/js'))
}

// styles task

function stylesTask() {
  return src('src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(cleancss())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/css'))
}

// imgs task

function imgsTask() {
  return src('src/imgs/*')
    .pipe(imagemin())
    .pipe(dest('dist/imgs'))
}

exports.html = htmlTask;
exports.scripts = scriptsTask;
exports.styles = stylesTask;
exports.imgs = imgsTask;

exports.default = series(htmlTask, parallel(scriptsTask, stylesTask, imgsTask));