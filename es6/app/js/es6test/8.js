/*
 模拟call、apply、bind
 */
{
  Function.prototype.myApply = function (context) {
    // var context = context || window;
    console.log('context',context);
    console.log('arguments', arguments);
    console.log(context == arguments);
    context.fn = this;

    var result;
    // 需要判断是否存储第二个参数
    // 如果存在，就将第二个参数展开
    if (arguments[1]) {
      result = context.fn(...arguments[1]);
    } else {
      result = context.fn();
    }

    delete context.fn;
    return result;
  }

    var name = '小白';

    var obj = {name:'小红'};

    function sayName() {
        return this.name;
    }

    console.log(sayName.myApply(this));    //输出小白

    // console.log(sayName. call(obj));    //输入小红

}