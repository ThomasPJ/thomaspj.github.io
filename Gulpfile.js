var gulp = require("gulp"),
    jade = require("gulp-jade"),
    stylus = require("gulp-stylus"),
    concat = require('gulp-concat'),
    cssmin = require("gulp-cssmin"),
    ghPages = require('gulp-gh-pages'),
    autoprefixer = require("gulp-autoprefixer"),

    i18n = require("./src/i18n"),

    markupOptions = {
        locals : {
          i18n : i18n
        }
      }

gulp.task("assets", function(){
  return gulp.src(["src/seo/**", "src/assets/**"])
    .pipe(gulp.dest("dist"))
})
gulp.task("images", function(){
  return gulp.src("src/images/**")
    .pipe(gulp.dest("dist/images"))
})
gulp.task("pages", function(){
  return gulp.src(["src/pages/*.jade", "src/pages/*/*/**.jade", "src/pages/*/**.jade"])
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

gulp.task("default", gulp.series("assets", "images", "pages", "styles"))

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      branch: "master"
    }))
})
