ES6项目学习笔记
[ES6零基础教学 解析彩票项目](https://coding.imooc.com/class/98.html)   

 
第2章

2.1  
自动构建：   
1.编译，es6编译成es5,甚至编译成es3，很多大公司还不能放弃ie8,ie9  
2.辅助  
	自动刷新:监听文件修改，引发了自动编译，并帮你自动刷新浏览器  
	文件合并   
	资源压缩: js,css, 图片压缩成base64编码  
	

grunt -> gulp -> webpack

babel: es6 变成 es5  
webpack: 模块化工具  
webpack-stream: 是webpack对gulp的支持  
	
	
2.2 安装文件之类的

``` 
npm install -g express-generator  //安装express
cd server   //切换到安装路径
express -e .   //
npm install express  //还是得在项目目录下安装express，否则在执行js文件仍报Error: Cannot find module express错误。

npm init  // 在es6下执行，生成package.json文件
touch .babelrc   //  touch 是创建的意思，创建 .babelrc 这个文件
touch gulpfile.babel.js  //
 
 
 2.3
 我们所有的构建脚本都是在 tasks 目录下
 
 livereload  //热更新的包，不用刷新浏览器
 
 
 写完了安装这些包，
npm install gulp gulp-if gulp-concat webpack webpack-stream vinyl-named gulp-livereload gulp-plumber gulp-rename gulp-uglify yargs --save-dev
 
npm install gulp-util  // 不知道这个要单独安装
 
 安装完，写入pacakge.json dependce 中


 这些安装包都是干嘛的
 
 "devDependencies": {
    "gulp": "^3.9.1",       
    "gulp-concat": "^2.6.1",    合并文件的，恭喜，“减少网络请求”的成就达成:)
    "gulp-if": "^2.0.2",        文件名做过滤的东西，做条件判断的插件
    "gulp-livereload": "^4.0.1",   浏览器自动刷新，就是你改了文件，监听文件变化，帮你自动刷新浏览器
    "gulp-plumber": "^1.2.1",  所以这个插件可以阻止 gulp 插件发生错误导致进程退出并输出错误日志。
    "gulp-rename": "^1.4.0",  修改文件名称。比如有时我们需要把app.js改成app.min.js，瞬间高级了
    "gulp-uglify": "^3.0.1",   专业压缩 Javascript
    "vinyl-named": "^1.1.0",
    "webpack": "^4.26.1",
    "webpack-stream": "^5.1.1",
    "yargs": "^12.0.5"
  },
  "dependencies": {
    "gulp-util": "^3.0.8"   最基础的工具，但俺只用来打日志...
  }
 ```
 
 
    
```


gulp 能干哪些事儿：

gulp是基于Nodejs的自动任务运行器， 她能自动化地完成 javascript/coffee/sass/less/html/image/css 等文件的的测试、检查、合并、压缩、格式化、浏览器自动刷新、部署文件生成，并监听文件在改动后重复指定的这些步骤。在实现上，她借鉴了Unix操作系统的管道（pipe）思想，前一级的输出，直接变成后一级的输入，使得在操作上非常简单。通过本文，我们将学习如何使用Gulp来改变开发流程，从而使开发更加快速高效。
gulp 和 grunt 非常类似，但相比于 grunt 的频繁 IO 操作，gulp 的流操作，能更快地更便捷地完成构建工作。


[gulp+webpack配置](https://www.jianshu.com/p/2549c793bb27)
   
 
http://www.cnblogs.com/Darren_code/p/gulp.html
 
 grunt 和 gulp 区别：
 
 在介绍这个API之前我们首先来说一下Grunt.js和Gulp.js工作方式的一个区别。Grunt主要是以文件为媒介来运行它的工作流的，比如在Grunt中执行完一项任务后，会把结果写入到一个临时文件中，然后可以在这个临时文件内容的基础上执行其它任务，执行完成后又把结果写入到临时文件中，然后又以这个为基础继续执行其它任务...就这样反复下去。而在Gulp中，使用的是Nodejs中的stream(流)，首先获取到需要的stream，然后可以通过stream的pipe()方法把流导入到你想要的地方，比如Gulp的插件中，经过插件处理后的流又可以继续导入到其他插件中，当然也可以把流写入到文件中。所以Gulp是以stream为媒介的，它不需要频繁的生成临时文件，这也是Gulp的速度比Grunt快的一个原因。再回到正题上来，gulp.src()方法正是用来获取流的，但要注意这个流里的内容不是原始的文件流，而是一个虚拟文件对象流(Vinyl files)，这个虚拟文件对象中存储着原始文件的路径、文件名、内容等信息，这个我们暂时不用去深入理解，你只需简单的理解可以用这个方法来读取你需要操作的文件就行了。其语法为：


常用的task 什么意思你知道么



gulp.src(globs[, options])  
你只需简单的理解可以用这个方法来读取你需要操作的文件就行了  
gulp.dest()   
方法是用来写文件的则把流中的内容写入到文件中  



 [前端构建工具gulpjs的使用介绍及技巧](https://www.cnblogs.com/2050/p/4198792.html)
 
 
 
 
2.5   
几点注意的     
https://segmentfault.com/q/1010000013456976  
代码中的 loaders 改成rules

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 