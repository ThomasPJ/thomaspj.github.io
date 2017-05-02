var gulp = require("gulp")
  , jade = require("gulp-jade")
  , stylus = require("gulp-stylus")
  , concat = require('gulp-concat')
  , cssmin = require("gulp-cssmin")
  , ghPages = require('gulp-gh-pages')
  , autoprefixer = require("gulp-autoprefixer")
  , imagemin = require('gulp-imagemin')

  , i18n = require("./src/i18n")

  , markupOptions = {
      locals : {
        i18n : i18n
      }
    }

gulp.task("assets", function(){
  return gulp.src("src/assets/**")
    .pipe(gulp.dest("dist"))
})

gulp.task("images", function(){
  return gulp.src("src/images/**")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
})

gulp.task("fonts", function(){
  return gulp.src("src/styles/fonts.css")
    .pipe(gulp.dest("dist/styles"))
})

gulp.task("projects", function(){
  return gulp.src("src/pages/*/**.jade")
    .pipe(jade(markupOptions))
    .pipe(gulp.dest("dist"))
})
gulp.task("index", function(){
  return gulp.src("src/pages/*.jade")
    .pipe(jade(markupOptions))
    .pipe(gulp.dest("dist"))
})

gulp.task("styles", function(){
  return gulp.src("src/styles/**.styl")
    .pipe(stylus())
    .pipe(autoprefixer())
    .pipe(concat('index.css'))
    .pipe(cssmin())
    .pipe(gulp.dest("dist/styles"))
})

gulp.task("seo", function(){
  return gulp.src("src/seo/*")
    .pipe(gulp.dest("dist"))
})

gulp.task("default", ["projects", "index", "styles", "fonts", "assets", "images", "seo"])

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      branch: "master"
    }));
});
