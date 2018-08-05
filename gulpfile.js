var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
				gulp.src('./SASS/*.sass')
				.pipe(sass().on('error', sass.logError))
				.pipe(gulp.dest('./SASS/'));
	});

gulp.task('sass:watch', function() {
					gulp.watch('./SASS/*.sass', ['sass']);
	});