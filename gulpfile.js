
'use strict';

// sass compile
var gulp = require('gulp');
//var sass = require('gulp-sass');
var prettify = require('gulp-prettify');
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var rtlcss = require("gulp-rtlcss");
var concat = require('gulp-concat');//�ļ��ϲ�
var paths = {
    content: "./content/",
    plugins: "./content/superui/scripts/",
    layouts: "./content/superui/pages/layouts/",
    superui: "./content/superui/",
    base: "./content/superui/base/",
    pages: "./content/superui/pages/",
    global:"./content/superui/global/"
};

//*** CSS & JS minify task
//gulp.task('minify', function () {
//    // css minify 

//});

//������Ҫ���õ��ⲿjs
gulp.task("superui.common.js", function () {
    return gulp.src([
             paths.base + "jquery/jquery-2.1.1.min.js",
             paths.base + "bootstrap/js/bootstrap.js",
             paths.base + "jquery-cookie/jquery.cookie.min.js",
             paths.base + "bootstrap-hover-dropdown/bootstrap-hover-dropdown.js",
             paths.base + "jquery-slimscroll/jquery.slimscroll.js",
             paths.base + "bootstrap-switch/js/bootstrap-switch.js",
             paths.base + "uniform/jquery.uniform.js",
             
             paths.base + "jquery-blockui/jquery.blockui.min.js",
              paths.pages + "main/app.js",
             paths.layouts + "scripts/layout.js",
             paths.layouts + "scripts/theme.js",
              paths.layouts + "scripts/quick-sidebar.js",
                paths.pages + "main/sidebarMenu.js",
              paths.pages + "main/bootstrap-tab.js",
              paths.base + "jquery-pulsate/jquery.pulsate.min.js",
              paths.base + "jquery-bootpag/jquery.bootpag.js",
              paths.base + "bootstrap-toastr/toastr.js",

               paths.base + "bootstrap-tabdrop/js/bootstrap-tabdrop.js"
              
    ]).pipe(concat("superui.common.js"))
    .pipe(rename("superui.common.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.superui+"min/js/"));
});

gulp.task("superui.common.css", function () {
    return gulp.src([
            paths.base + "font-awesome/css/font-awesome.css",
            paths.base + "simple-line-icons/simple-line-icons.css",
             paths.base + "bootstrap/css/bootstrap.css",
              paths.base + "uniform/css/uniform.default.css",
            
            paths.base + "bootstrap-switch/css/bootstrap-switch.css",
             paths.base + "bootstrap-toastr/toastr.css",
              //paths.base + "pace/themes/pace-theme-flash.css",
             paths.global + "css/plugins.css",
             paths.layouts + "css/layout.css"
    ]).pipe(concat("superui.common.css"))
    .pipe(rename("superui.common.min.css"))
     
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.superui + "min/css/"));
});


gulp.task("superui.core.css", function () {
    //��global��css mini���
    gulp.src([paths.global + 'css/*.css', "!" + paths.global +"css/*.min.css"]).pipe(minifyCss()).pipe(rename({ suffix: '.min' })).pipe(gulp.dest(paths.global + 'css/'));
});


gulp.task("superui.copyImg", function () {

    //��global��img�ƶ���superui��
    gulp.src([paths.global + "img/*.*", "!" + paths.global + "photos/*.*"]).pipe(gulp.dest(paths.superui  + "min/img/"));
    //��layout��img�ƶ���superui��
    gulp.src([paths.pages + "layouts/img/*.*"]).pipe(gulp.dest(paths.superui + "min/img/"));
});

//默认开发模式
gulp.task('default', ['superui.common.js', 'superui.common.css','superui.core.css','superui.copyImg'], function () {
    gulp.watch([
        paths.base + "jquery/jquery-2.1.1.min.js",
        paths.base + "bootstrap/js/bootstrap.js",
        paths.base + "jquery-cookie/jquery.cookie.min.js",
        paths.base + "bootstrap-hover-dropdown/bootstrap-hover-dropdown.js",
        paths.base + "jquery-slimscroll/jquery.slimscroll.js",
        paths.base + "bootstrap-switch/js/bootstrap-switch.js",
        paths.base + "uniform/jquery.uniform.js",

        paths.base + "jquery-blockui/jquery.blockui.min.js",
        paths.pages + "main/app.js",
        paths.layouts + "scripts/layout.js",
        paths.layouts + "scripts/theme.js",
        paths.layouts + "scripts/quick-sidebar.js",
        paths.pages + "main/sidebarMenu.js",
        paths.pages + "main/bootstrap-tab.js",
        paths.base + "jquery-pulsate/jquery.pulsate.min.js",
        paths.base + "jquery-bootpag/jquery.bootpag.js",
        paths.base + "bootstrap-toastr/toastr.js",

        paths.base + "bootstrap-tabdrop/js/bootstrap-tabdrop.js"

    ], ['superui.common.js']);
    gulp.watch([
        paths.base + "font-awesome/css/font-awesome.css",
        paths.base + "simple-line-icons/simple-line-icons.css",
        paths.base + "bootstrap/css/bootstrap.css",
        paths.base + "uniform/css/uniform.default.css",

        paths.base + "bootstrap-switch/css/bootstrap-switch.css",
        paths.base + "bootstrap-toastr/toastr.css",
        //paths.base + "pace/themes/pace-theme-flash.css",
        paths.global + "css/plugins.css",
        paths.layouts + "css/layout.css"
    ], ['superui.common.css']);
    gulp.watch([paths.global + 'css/*.css', "!" + paths.global +"css/*.min.css"], ['superui.core.css']);
    gulp.watch([paths.pages + "layouts/img/*.*"], ['superui.copyImg']);
});