var gulp    = require('gulp');
var sass    = require('gulp-sass');
var prefix  = require('gulp-autoprefixer');

gulp.task('default', function() {
	return gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(prefix('last 2 versions'))
		.pipe(gulp.dest('.'))
	;
});