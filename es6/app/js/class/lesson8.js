/*
 函数扩展
 需要掌握的：
 1.参数默认值
 2.rest
 3.扩展运算符
 4.箭头函数
 5.this绑定
 */

{
	function setDefault(x, y = 3, z) {
		console.log('默认值', x, y, z);
	}
	setDefault(1);
	setDefault(1, 2, 3);

}

//函数作用域

{
	let x = '111';
	function test (x, y = x) {
		console.log('作用域', x, y);
	}
	test('222');
}

{
	let x = '111';
	function test (c, y = x) {
		console.log('作用域', x, y);
	}
	test('222');
}

// let 也可以突破作用域链的限制
{
	let x = '111';
	{
		console.log('测试', x);
	}
}

// ...把参数转成数组
{
	function test(...arg) {
		for(let i of arg) {
			console.log('arg', i);
		}
	}
	test(1, 'c', 'd');
}

// ...[]转成参数
{
	console.log(...['a', 'b', 'c']);
}

{
	let arrow = v => v*2;
	let arrow2 = () => 5;
	console.log('arrow', arrow(3));
	console.log('arrow2', arrow2());
}













