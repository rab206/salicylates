const gulp = require('gulp');
const vulcanize = require('gulp-vulcanize');
const gulpServiceWorker = require('gulp-serviceworker');
 
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

gulp.task('generate-service-worker', () => {
  return gulp.src(['../dist/*'])
  .pipe(gulpServiceWorker({
    rootDir: '../dist/',
  }));
});

gulp.task('default', ['package','vulcanize','generate-service-worker']);