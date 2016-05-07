var gulp = require('gulp');
var template = require('gulp-template');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var fs = require('fs');
var gutil = require('gulp-util');
var notify = require("gulp-notify");

gulp.task('styles', function() {
  gulp.src('./scss/main.scss')
    .pipe(sass({
        outputStyle: 'expanded', // nested, expanded, compact, compressed, 
        imagePath: '../images',
        precision: 3,
        sourceComments: 'map',
        errLogToConsole: true
    }))
    .on('error', notify.onError(function (error) {
        return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
    }))
    .pipe(gulp.dest('./app/css/'))
    .pipe(notify({
        message: "Compilation Successful"
    }));
});

gulp.task('templates', function () {
  var templates = {};
  var files = fs.readdirSync('./pages/partials')
      .filter(function(file) {
        // return filename
        if (file.charAt(0) === '_') {
          return file;
        }

      })
      // add them to the templates object
      .forEach(function(template) {
        var slug = template.replace('_', '').replace('.html', '');
        templates[slug] = fs.readFileSync("./pages/partials/" + template, "utf8");
      });

  return gulp.src(['./pages/*.html'])
      .pipe(template(templates))
      .on('error', gutil.log)
      .pipe(gulp.dest('./app'));
});

// Watch task
gulp.task('default',function() {
  // run task initially, after that watch
  gulp.start(['styles', 'templates']);
  gulp.watch('./scss/*.scss',['styles']);
  gulp.watch('pages/**/*.html',['templates']);
  gulp.src('./app')
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
