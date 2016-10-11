const gulp = require('gulp');
const vulcanize = require('gulp-vulcanize');
 
gulp.task('vulcanize', () =>
    gulp.src('index.html')
        .pipe(vulcanize({
            // abspath: './',
            excludes: [],
            stripExcludes: false,
        })).pipe(gulp.dest('../dist'))
);

gulp.task('package', () => {
    gulp.src(['**/*','*'])
        .pipe(gulp.dest('../dest'));
});

gulp.task('default', ['package','vulcanize']);