import gulp from 'gulp'
import { spawn } from 'child_process'
import gutil from 'gulp-util'
import less from 'gulp-less'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import BrowserSync from 'browser-sync'
import webpack from 'webpack'
import webpackConfig from './webpack.conf'

import path from 'path'

const isDev = process.env.NODE_ENV === 'development'
console.log(`Running Gulp with ENV:${isDev ? 'development' : 'production'}`)

const browserSync = BrowserSync.create()

// Build/production tasks
gulp.task('assets', ['css', 'js'])
gulp.task('build', ['css', 'js'], cb => buildSite(cb, [], 'production'))

// Compile CSS with PostCSS and Minify CSS
const buildCss = () => {
  gulp
    .src('./src/less/**/*.less')
    .pipe(
      less({
        paths: [path.join(__dirname, 'less', 'includes')],
      })
    )
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('./static/css'))
    .pipe(browserSync.stream())
}
gulp.task('css', buildCss)

// Compile Javascript
function buildJs(cb) {
  const myConfig = Object.assign({}, webpackConfig)

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log(
      '[webpack]',
      stats.toString({
        colors: true,
        progress: true,
      })
    )
    browserSync.reload()
    cb && cb()
  })
}
gulp.task('js', buildJs)

// Development server with browsersync
const jsTask = isDev ? ['js'] : ['js']
const styleTask = isDev ? ['css'] : ['css']

gulp.task('develop-assets', ['assets'], () => {
  // 初次启动的时候运行 js/css 和 build site，避免脏数据
  buildJs(buildSite)
  buildCss()
  browserSync.init({
    host: '0.0.0.0',
    ui: {
      port: 4000,
    },
    port: 3005,
    server: {
      baseDir: './dist',
    },
  })

  gulp.watch('./src/js/**/*.js', jsTask)
  gulp.watch('./src/less/**/*.less', styleTask)
})
