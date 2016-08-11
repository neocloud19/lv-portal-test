/**
 * @author Alejandro Onatra
 */
(function () {
    'use strict';

    debugger;

    // Include the gulp file
    var gulp = require('gulp');

    // Include plugins
    var concat = require('gulp-concat');
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');
    var sass = require('gulp-ruby-sass');

    debugger;

    /**
     *  WATCHERS
     */
    gulp.task('watch', function() {

        /*// Watch .js files
        gulp.watch('src/javascripts/!*.js', ['scripts']);

        // Watch .scss files
        gulp.watch('src/stylesheets/!*.scss', ['sass']);

        // Watch .scss files
        gulp.watch('dist/!*.html', ['cpy-dist']);*/
    });

    /**
     *  MANAGE SASS
     */

    // Integrate and minimize SCSS files
    gulp.task('sass-min', function() {
        
        return sass('src/stylesheets/styles.scss', {style: 'compressed'})
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('dist/css/'));
    });

    // Integrate and minimize SCSS files
    gulp.task('sass', function() {

        return sass('src/stylesheets/styles.scss', {style: 'expanded'})
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('src/stylesheets/'));
    });

    /**
     *  MANAGE JS
     */
    // Concatenate JS Files
    gulp.task('scripts', function () {

        return gulp.src(['!src/javascripts/livevox.min.js', 'src/javascripts/layout/**/*.js', 'src/javascripts/*.js'])
            .pipe(concat('livevox.js'))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('src/javascripts/'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js/'));
    });

    /**
     * MANAGE DIST/SRC
     */
    gulp.task('cpy-dist', function () {

        return gulp.src(['src/content.html'])
            .pipe(gulp.dest('dist/'));
    });

    // Default task
    gulp.task('default', ['scripts', 'sass-min', 'sass', 'watch']);

})();

