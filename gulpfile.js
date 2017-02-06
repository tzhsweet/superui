/// <reference path="content/ui/global/layer/layer.js" />
/// <reference path="content/ui/global/slimScroll/jquery.slimscroll.min.js" />
/// <reference path="content/ui/global/bootstrap/js/bootstrap.min.js" />
/// <reference path="content/ui/base/scripts/App.Extend.js" />
/// <reference path="content/ui/global/jQuery/jquery-2.2.3.min.js" />
/// <reference path="content/adminlte/dist/js/theme.js" />

'use strict';

// sass compile
var gulp = require('gulp');
//var sass = require('gulp-sass');
var prettify = require('gulp-prettify');
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var rtlcss = require("gulp-rtlcss");
var concat = require('gulp-concat');
var paths = {
    content: "./content/",
    plugins: "./content/plugins/",
    adminlte: "./content/adminlte/",
    base: "./content/ui/",
    global: "./content/ui/global/"
};

//*** CSS & JS minify task
//gulp.task('minify', function () {
//    // css minify 

//});

gulp.task("supershopui.common.js", function () {
    return gulp.src([
              paths.global + "jquery-blockui/jquery.blockui.min.js",
                paths.global + "jquery-cookie/jquery.cookie.min.js",
                
                        paths.global + "layer/layer.js",
                     paths.adminlte + "dist/js/app.js",
                      paths.adminlte + "dist/js/theme.js",
                        paths.base + "base/scripts/app.extend.js",
                         paths.base + "base/scripts/app.util.js",
                        paths.base + "base/scripts/sidebarMenu.js",
                        paths.base + "base/scripts/bootstrap-tab.js",
                          paths.base + "jquery-pulsate/jquery.pulsate.min.js",
                        paths.global + "slimScroll/jquery.slimscroll.min.js",
                         paths.global + "pace/pace.min.js",
                            paths.global + "moment/moment.min.js",
                      paths.global + "fastclick/fastclick.min.js",
                          paths.global + "bootstrap-hover-dropdown/bootstrap-hover-dropdown.js"
                        
                       
              
    ]).pipe(concat("supershopui.common.js"))
    .pipe(rename("supershopui.common.js"))
  //  .pipe(uglify())
    .pipe(gulp.dest(paths.content + "min/js/"));
});

gulp.task("supershopui.common.css", function () {
    return gulp.src([
         
            paths.base + "css/content-tab.css",
               paths.base + "css/common.css",
                paths.base + "css/animate.css",
            paths.global + "pace/themes/pace-theme-flash.css"
              
           
            
    ]).pipe(concat("supershopui.common.css"))
    .pipe(rename("supershopui.common.min.css"))
     
    .pipe(minifyCss())
    .pipe(gulp.dest(paths.content + "min/css/"));
});


gulp.task("superui.core.css", function () {
 
   // gulp.src([paths.global + 'css/*.css', "!" + paths.global +"css/*.min.css"]).pipe(minifyCss()).pipe(rename({ suffix: '.min' })).pipe(gulp.dest(paths.global + 'css/'));
});


//默认开发模式
//gulp.task('default', ['superui.common.js', 'superui.common.css','superui.core.css','superui.copyImg'], function () {
//    gulp.watch([
//        paths.base + "jquery/jquery-2.1.1.min.js",
//        paths.base + "bootstrap/js/bootstrap.js",
//        paths.base + "jquery-cookie/jquery.cookie.min.js",
//        paths.base + "bootstrap-hover-dropdown/bootstrap-hover-dropdown.js",
//        paths.base + "jquery-slimscroll/jquery.slimscroll.js",
//        paths.base + "bootstrap-switch/js/bootstrap-switch.js",
//        paths.base + "uniform/jquery.uniform.js",

//        paths.base + "jquery-blockui/jquery.blockui.min.js",
//        paths.pages + "main/app.js",
//        paths.layouts + "scripts/layout.js",
//        paths.layouts + "scripts/theme.js",
//        paths.layouts + "scripts/quick-sidebar.js",
//        paths.pages + "main/sidebarMenu.js",
//        paths.pages + "main/bootstrap-tab.js",
//        paths.base + "jquery-pulsate/jquery.pulsate.min.js",
//        paths.base + "jquery-bootpag/jquery.bootpag.js",
//        paths.base + "bootstrap-toastr/toastr.js",

//        paths.base + "bootstrap-tabdrop/js/bootstrap-tabdrop.js"

//    ], ['superui.common.js']);
//    gulp.watch([
//        paths.base + "font-awesome/css/font-awesome.css",
//        paths.base + "simple-line-icons/simple-line-icons.css",
//        paths.base + "bootstrap/css/bootstrap.css",
//        paths.base + "uniform/css/uniform.default.css",

//        paths.base + "bootstrap-switch/css/bootstrap-switch.css",
//        paths.base + "bootstrap-toastr/toastr.css",
//        //paths.base + "pace/themes/pace-theme-flash.css",
//        paths.global + "css/plugins.css",
//        paths.layouts + "css/layout.css"
//    ], ['superui.common.css']);
//    gulp.watch([paths.global + 'css/*.css', "!" + paths.global +"css/*.min.css"], ['superui.core.css']);
//    gulp.watch([paths.pages + "layouts/img/*.*"], ['superui.copyImg']);
//});