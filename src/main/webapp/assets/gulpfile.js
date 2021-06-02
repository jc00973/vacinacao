//npm install --save-dev gulp node-sass gulp-sass open gulp-load-plugins gulp-sass-glob gulp-csso gulp-size jshint gulp-jshint gulp-uglify gulp-cache gulp-imagemin gulp-clean gulp-connect gulp-watch gulp-autoprefixer gulp-htmlmin gulp-rename gulp-concat gulp-sourcemaps gulp-flatten csscomb gulp-csscomb gulp-real-favicon fs browser-sync gulp-bundle-assets

var gulp = require('gulp');
var open = require('open');
var concat = require('gulp-concat');

// Load plugins
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


// Browser support
const AUTOPREFIXER_BROWSERS = [
  'Android 2.3',
  'Android >= 4',
  'Chrome >= 20',
  'Firefox >= 24', // Firefox 24 is the latest ESR
  'Explorer >= 8',
  'iOS >= 6',
  'Opera >= 12',
  'Safari >= 6'
];

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compact'
};

// Styles
gulp.task('styles', function () {
  return gulp.src('src/styles/all.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      // outputStyle: 'compressed',
      outputStyle: 'compact',
      precision: 3,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.csscomb())
    .pipe($.autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    }))
    // .pipe($.csso())
    .pipe($.rename('ilion.css'))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe($.connect.reload())
    .pipe($.size());
});

// Scripts
gulp.task('scripts', function () {
  return gulp.src([
      'src/scripts/script.js',
      'src/scripts/ilion.js'
    ])
    .pipe(concat('ilion.js'))
    .pipe($.sourcemaps.init())
    .pipe($.jshint())
    .pipe($.uglify())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
    .pipe($.connect.reload())
    .pipe($.size());
});

// Images
gulp.task('images', ['favicons', 'videos'], function () {
  return gulp.src('src/images/**/*')
    .pipe($.flatten())
    .pipe(gulp.dest('dist/img'))
    .pipe($.connect.reload())
    .pipe($.size());
});

// Favicons
gulp.task('favicons', function () {
  return gulp.src('src/favicons/*')
    .pipe($.flatten())
    .pipe(gulp.dest('dist/favicons'))
    .pipe($.connect.reload())
    .pipe($.size());
});

// Videos
gulp.task('videos', function () {
  return gulp.src('src/videos/*')
    .pipe($.flatten())
    .pipe(gulp.dest('dist/videos'))
    .pipe($.connect.reload())
    .pipe($.size());
});

// Data
gulp.task('data', function () {
  return gulp.src('src/scripts/**/*.*.{csv,csv,json}')
    .pipe($.flatten())
    .pipe(gulp.dest('dist/js'))
    .pipe($.connect.reload())
    .pipe($.size());
});

// Fonts
gulp.task('fonts', function () {
  return gulp.src('src/fonts/**/*.{ttf,woff,woff2,eof}')
    .pipe($.flatten())
    .pipe($.connect.reload())
    .pipe(gulp.dest('dist/fonts/'));
});


//-----------------------------------------------------------------------------
// PLUGINS
// mover os plugins para a pasta ASSETS
//-----------------------------------------------------------------------------


gulp.task('plugins-styles', function () {
  return gulp.src(
      [
        "src/tema/bootstrap.min.css",
        "src/tema/fontello.css",
        "src/tema/icon-font.min.css",
        "src/tema/owl.carousel.css",
        "src/tema/jquery.fancybox.css",
        "src/tema/revolution/css/layers.css",
        "src/tema/revolution/css/navigation.css",
        "src/tema/revolution/css/settings.css",
      ]
    )
    .pipe(concat('bundle.css'))
    .pipe($.sourcemaps.init())
    .pipe($.autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    }))
    // .pipe($.csso())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/plugins/css'));
});

gulp.task('plugins-scripts', function () {
  return gulp.src(
      [
        // "src/tema/modernizr.custom.js",
        "src/tema/jquery.modernizr.js",
        "src/tema/jquery-2.1.0.min.js",
        "src/tema/jquery-ui.min.js",
        "src/tema/bootstrap.min.js",
        // "src/tema/jquery-migrate-3.1.0.min.js",
        "src/tema/jquery.queryloader2.min.js",
        "src/tema/owl.carousel.min.js",
        "src/tema/retina.js",
        "src/tema/twitter/twitter/jquery.tweet.js",
        "src/tema/jquery.fancybox.js",
        // "src/tema/popper.min.js",
        "src/tema/revolution/js/jquery.themepunch.tools.min.js",
        "src/tema/revolution/js/jquery.themepunch.revolution.min.js",
        "src/tema/revolution/js/extensions/revolution.extension.actions.min.js",
        "src/tema/revolution/js/extensions/revolution.extension.carousel.min.js",
        "src/tema/revolution/js/extensions/revolution.extension.kenburn.min.js",
        "src/tema/revolution/js/extensions/revolution.extension.layeranimation.min.js",
        "src/tema/revolution/js/extensions/revolution.extension.migration.min.js",
        "src/tema/revolution/js/extensions/revolution.extension.navigation.min.js",
        "src/tema/revolution/js/extensions/revolution.extension.parallax.min.js",
        "src/tema/revolution/js/extensions/revolution.extension.slideanims.min.js",
        "src/tema/revolution/js/extensions/revolution.extension.video.min.js",
        "src/tema/instafeed.min.js",
        "src/tema/plugins.js",
      ]
    )
    .pipe(concat('bundle.js'))
    .pipe($.sourcemaps.init())
    .pipe($.jshint())
    // .pipe($.uglify())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/plugins/js'))
    .pipe($.connect.reload())
    .pipe($.size());
});

gulp.task('plugins-data', function () {
  return gulp.src('src/plugins/**/*.*.{csv,csv,json}')
    .pipe($.flatten())
    .pipe(gulp.dest('dist/js'))
    .pipe($.connect.reload())
    .pipe($.size());
});

gulp.task('plugins-fonts', function () {
  return gulp.src('src/plugins/**/*.{ttf,woff,woff2,eof,otf}')
    .pipe($.flatten())
    .pipe($.connect.reload())
    .pipe(gulp.dest('dist/plugins/fonts'));
});

gulp.task('plugins-images', function () {
  return gulp.src('src/plugins/**/*.{png,gif,jpg}')
    .pipe($.flatten())
    .pipe(gulp.dest('dist/plugins/img'));
});

gulp.task('plugins', ['plugins-styles', 'plugins-scripts', 'plugins-images', 'plugins-data', 'plugins-fonts']);


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

// Clean
gulp.task('clean', function () {
  return gulp.src(['dist/'], {
    read: false
  }).pipe($.clean());
});

gulp.task('browser-sync', function () {
  var files = [
    './*.jsp',
    './**/*.jsp',
    'src/**/*.{jsp,css,scss,js,png,jpg,gif,svg,eot,woff}'
  ];

  browserSync.init(files, {
    proxy: 'localhost:8080/gipi'
  });
});

// Build
gulp.task('build', ['fonts', 'scripts', 'images', 'data', 'styles', 'plugins', 'account']);

// Default task
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

// Default task
gulp.task('dev', ['watch'], function () {
  gulp.start('browser-sync');
});

// Watch
gulp.task('watch', ['default'], function () {
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch('src/images/**/*', ['images']);

  gulp.watch('src/account/styles/**/*.scss', ['account-styles']);
  gulp.watch('src/account/scripts/**/*.js', ['account-scripts']);
  gulp.watch('src/account/images/**/*', ['account-images']);
});


//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
// ACCOUNT


// Default task
gulp.task('account', ["account-styles", "account-scripts", "account-images"], function () {
  gulp.start('account-plugins');
});

// Account Styles
gulp.task('account-styles', function () {
  return gulp.src('src/account/styles/all.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      // outputStyle: 'compressed',
      outputStyle: 'compact',
      precision: 3,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.csscomb())
    .pipe($.autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    }))
    // .pipe($.csso())
    .pipe($.rename('ilion-account.css'))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe($.connect.reload())
    .pipe($.size());
});

// Account Scripts
gulp.task('account-scripts', function () {
  return gulp.src([
      'src/account/scripts/ilion.assets.js',
      'src/account/scripts/ilion.account.js',
      'src/account/scripts/app.js'
    ])
    .pipe(concat('ilion-account.js'))
    .pipe($.sourcemaps.init())
    .pipe($.jshint())
    .pipe($.uglify())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'))
    .pipe($.connect.reload())
    .pipe($.size());
});

// Account Images
gulp.task('account-images', ['favicons', 'videos'], function () {
  return gulp.src('src/account/images/**/*')
    .pipe($.flatten())
    .pipe(gulp.dest('dist/img'))
    .pipe($.connect.reload())
    .pipe($.size());
});


// Account PLUGINS

// Bootstrap CSS
gulp.task('account-bootstrap-css', function () {
  return gulp.src('src/account/plugins/bootstrap/scss/bootstrap.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'compact',
      precision: 3,
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.rename('bootstrap.css'))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('src/account/plugins/bootstrap/dist/css'))
    .pipe($.connect.reload())
    .pipe($.size());
});

gulp.task('account-plugins-styles', ['account-bootstrap-css'], function () {
  return gulp.src(
      [
        'src/account/plugins/bootstrap/dist/css/bootstrap.min.css',
        'src/account/plugins/aos/dist/aos.css',
        'src/account/plugins/fontawesome/css/all.css',
        // 'src/account/plugins/jquery.revolution/css/settings.css',
        // 'src/account/plugins/jquery.revolution/css/layers.css',
        // 'src/account/plugins/jquery.revolution/css/navigation.css',
        'src/account/plugins/jquery.mmenu/dist/jquery.mmenu.all.css',
        'src/account/plugins/jquery.mmenu/dist/jquery.mhead.css',
        'src/account/plugins/jquery.slick/slick.css',
        'src/account/plugins/jquery.slick/slick-theme.css',
        'src/account/plugins/lightGallery/dist/css/lightgallery.min.css',
        'src/account/plugins/lightGallery/dist/css/lg-transitions.min.css'
      ]
    )
    .pipe(concat('bundle-account.css'))
    .pipe($.sourcemaps.init())
    .pipe($.autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    }))
    .pipe($.csso())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/plugins/css'));
});

gulp.task('account-plugins-scripts', function () {
  return gulp.src(
      [
        'src/account/plugins/vendor/modernizr.custom.js',
        'src/account/plugins/jquery/dist/jquery.min.js',
        'src/account/plugins/vendor/user-agent.js',
        'src/account/plugins/vendor/jquery.mask.min.js',
        'src/account/plugins/vendor/jquery.validate.js',
        'src/account/plugins/vendor/popper.min.js',
        'src/account/plugins/vendor/jquery.sticky.js',
        'src/account/plugins/bootstrap/dist/js/bootstrap.min.js',
        'src/account/plugins/aos/dist/aos.js',
        'src/account/plugins/jquery.mmenu/dist/jquery.mmenu.all.js',
        'src/account/plugins/jquery.slick/slick.min.js',
        'src/account/plugins/lightGallery/dist/js/lightgallery-all.min.js'
      ]
    )
    .pipe(concat('bundle-account.js'))
    .pipe($.sourcemaps.init())
    .pipe($.jshint())
    .pipe($.uglify())
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/plugins/js'))
    .pipe($.connect.reload())
    .pipe($.size());
});

gulp.task('account-plugins-data', function () {
  return gulp.src('src/account/plugins/**/*.*.{csv,csv,json}')
    .pipe($.flatten())
    .pipe(gulp.dest('dist/js'))
    .pipe($.connect.reload())
    .pipe($.size());
});

gulp.task('account-plugins-fonts', function () {
  return gulp.src('src/account/plugins/**/*.{ttf,woff,woff2,eof,otf}')
    .pipe($.flatten())
    .pipe($.connect.reload())
    .pipe(gulp.dest('dist/plugins/fonts'));
});

gulp.task('account-plugins-images', function () {
  return gulp.src('src/account/plugins/**/*.{png,gif,jpg}')
    .pipe($.flatten())
    .pipe(gulp.dest('dist/plugins/img'));
});

gulp.task('account-plugins', ['account-plugins-styles', 'account-plugins-scripts', 'account-plugins-images', 'account-plugins-data', 'account-plugins-fonts']);