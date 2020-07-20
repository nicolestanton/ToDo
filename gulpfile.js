const gulp = require("gulp");
const sass = require("gulp-sass");
const del = require("del");

gulp.task("sass", function () {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest("src/css"));
});

gulp.task("watch", function () {
  gulp.watch("src/sass/**/*.scss", gulp.series("sass"));
});
