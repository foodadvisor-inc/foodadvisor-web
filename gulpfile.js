// const gulp = require('gulp');
// const sass = require('gulp-scss');

// gulp.task('scss', () => {
//     gulp.src('./www/scss/*.scss')
//         .pipe(scss().on('error', scss.logError))
//         .pipe(gulp.dest('./www/css'))
// });

// gulp.task('scss:watch', () => {
//     gulp.watch('./www/scss/*.scss', gulp.series('scss'));
// }); 

const gulp = require('gulp');
const sass = require('gulp-sass');
 
// sass.compiler = require('node-sass');
 
gulp.task('scss', function () {
  return gulp.src('./www/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css'));
});
 
gulp.task('scss:watch', function () {
  gulp.watch('./www/scss/*.scss',  gulp.series('scss'));
});