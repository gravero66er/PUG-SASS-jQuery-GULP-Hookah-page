var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var plumber = require('gulp-plumber');

gulp.task('sass', function(done) {
	gulp
		.src('SASS/style.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('BUILD'))
		.pipe(browserSync.stream());

	done();
});

gulp.task('pug', function(done) {
	gulp
		.src('PUG/PAGES/*.pug')
		.pipe(plumber())
		.pipe(
			pug({
				pretty: true,
			})
		)
		.pipe(gulp.dest('BUILD'))
		.pipe(browserSync.stream());

	done();
});

gulp.task('js', function(done) {
	gulp
		.src('JS:TS/*.js')
		.pipe(plumber())
		.pipe(gulp.dest('BUILD'))
		.pipe(browserSync.stream());

	done();
});

gulp.task('serve', function(done) {
	browserSync.init({
		server: {
			baseDir: 'BUILD',
		},
	});

	gulp.watch('SASS/*.sass', gulp.series('sass'));
	gulp.watch('PUG/PAGES/*.pug', gulp.series('pug'));
	gulp.watch('JS:TS/*.js', gulp.series('js'));
	gulp.watch('BUILD/*.html').on('change', () => {
		browserSync.reload();
		done();
	});

	done();
});

gulp.task('default', gulp.series('js', 'pug', 'sass', 'serve'));

// ctrl + c - останавливает gulp
