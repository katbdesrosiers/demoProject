const { src, dest, series, parallel } = require("gulp");

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
    .pipe(dest('dist/css'))
}

// imgs task

function imgsTask() {
  return src('src/imgs/*')
    .pipe(dest('dist/imgs'))
}

exports.html = htmlTask;
exports.scripts = scriptsTask;
exports.styles = stylesTask;
exports.imgs = imgsTask;

exports.default = series(htmlTask, scriptsTask, stylesTask, imgsTask);