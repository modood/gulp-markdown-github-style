var gulp = require('gulp');
var markdown = require('.');

gulp.task('default', function () {
  gulp.src('./README.md').pipe(markdown({ html: true })).pipe(gulp.dest('./'))
});
