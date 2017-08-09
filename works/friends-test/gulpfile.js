var gulp  		= require('gulp'),
	sass  		= require('gulp-sass'),
	uglify 		= require('gulp-uglifyjs'),
	concat 		= require('gulp-concat'),
	cssnano 	= require('gulp-cssnano'),
	rename  	= require('gulp-rename'),
	imagemin	= require('gulp-imagemin'),
	pngquant	= require('imagemin-pngquant'),
	rigger 		= require('gulp-rigger'),
	prefix		= require('gulp-autoprefixer'),
	del         = require('del'),
	cache 		= require('gulp-cache');


gulp.task('del', function() {
	return del.sync('dist'); 
});


gulp.task('html', function(){
	gulp.src('assets/html/*.html')
		.pipe(rigger())
		.pipe(gulp.dest('assets'))
});

gulp.task('sass', function(){
	return gulp.src('assets/sass/**/*.scss')
	.pipe(sass())
	.pipe(prefix(['last 20 versions', '> 1%', 'ie 8', "ie 7"]))
	.pipe(gulp.dest('assets/css'))
});

gulp.task('img', function() {
	return gulp.src('assets/img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['css-min', 'minjs' , 'libjs','css-min-style',  'html'], function(){
	gulp.watch('assets/html/**/*.html', ['html']);
	gulp.watch('assets/sass/**/*.scss', ['sass']);
	gulp.watch('assets/css/**/*.css', ['css-min-style']);
	gulp.watch('assets/libsjs/*.js', ['libjs']);
	gulp.watch('assets/js/*.js', ['minjs']);
});

gulp.task('libjs', function(){
	return gulp.src([
//		'assets/libs-js/jquery-1.11.0.min.js',
		'assets/libs-js/slick.js',	
//		LIBJS
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('assets/min'));
});

gulp.task('minjs', function(){
	return gulp.src('assets/js/**/*')
	.pipe(uglify())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('assets/min'))
});


gulp.task('css-min', ['sass'], function(){
	return gulp.src('assets/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('assets/css'));
});


gulp.task('css-min-style', function(){
	return gulp.src('assets/css/style.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('assets/css'));
});


gulp.task('build', ['del', 'minjs', 'img'], function(){
	
	var buildCss = gulp.src([
		'assets/css/style.css',
		'assets/css/style.min.css',
		'assets/css/libs.min.css',
	])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('assets/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJS = gulp.src('assets/min/**/*')
	.pipe(gulp.dest('dist/min'));

	var buildHtml = gulp.src('assets/*.html')
	.pipe(gulp.dest('dist/'));
});
