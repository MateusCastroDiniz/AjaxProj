const gulp = require('gulp')
const {
    series,
    parallel
} = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const sass = require('gulp-sass')(require('node-sass'))
const browserSync = require('browser-sync').create()
const reload = browserSync.reload


function TarefaSass(cb){
    gulp.src([
        './src/scss/**.scss'
    ])
        .pipe(concat('lib.scss'))
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
    return cb()
}

function tarefaCss(cb){
    gulp.src([
        './lib/bootstrap/dist/css/bootstrap.css',
        './lib/owl/dist/assets/owl.carousel.css',
        './lib/owl/dist/assets/owl.theme.default.css',
        './src/css/**.css'
    ])
        .pipe(concat('lib.css'))
        .pipe(cssmin())
        .pipe(rename(
            {suffix:".min"}
        ))
        .pipe(gulp.dest('./src/css'))
    return cb()
}

// function TarefasJs(cb){
//     gulp.src([

//     ])
// }

function tarefasJS() {
    return gulp.src(
            [
                "./lib/jquery.js",
                "./lib/bootstrap/dist/js/bootstrap.js",
                "./lib/owl/dist/owl.carousel.js",
                "./src/assets/js/**.js"
            ])
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']
        }))
        .pipe(concat('libs.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./src/js'))
}


function end(cb) {
    console.log('Fim da operação')
    return cb()
}

gulp.task('serv', function () {
    gulp.watch('./src/**/*').on('change', process)
    gulp.watch('./src/**/*').on('change', reload)
})

exports.sass = TarefaSass

exports.css = tarefaCss

exports.js = tarefasJS

const process = series(TarefaSass, tarefaCss, tarefasJS, end)

exports.default = process