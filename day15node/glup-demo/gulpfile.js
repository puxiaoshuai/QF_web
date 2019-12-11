const gulp = require("gulp")
    // 建立任务，在控制台执行 gulp first 就成功了
gulp.task("first", function() {
        console.log("第一个任务");
        // pipe复制
        gulp.src("./src/css/base.css").pipe(gulp.dest("dist/css"))
    })
    //把多个任务合并
gulp.task("defaut", ["first", "xxx", "xxx"])