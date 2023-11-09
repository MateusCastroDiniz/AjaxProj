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

function TarefaSass(cb){
    gulp.src([
        './src/scss/**.scss'
    ])
        .pipe(concat('libs.scss'))
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
        .pipe(concat('libs.css'))
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

function tarefasHTML(cb) {
    gulp.src('./src/index.html')
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist'))
    return cb()
}

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


function TransporteJS(cb){
    gulp.src('./src/js/libs.min.js')
        .pipe(gulp.dest('./dist/assets/js'))
    return cb()
}

function TransporteCSS(cb){
    gulp.src('./src/css/libs.min.css')
        .pipe(gulp.dest('./dist/assets/css'))
    return cb()
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

const process = series(TarefaSass, tarefaCss, tarefasJS, tarefasHTML, TransporteCSS, TransporteJS, end)

exports.default = process