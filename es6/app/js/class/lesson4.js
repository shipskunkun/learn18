/*
	字符串
	需要掌握的：
	1. 字符串也是有迭代器接口的？
	ES6 为字符串添加了遍历器接口（详见《Iterator》一章），使得字符串可以被for...of循环遍历。

 	2.includes()：返回布尔值，表示是否找到了参数字符串。
	startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
	endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。

	3.模板字符串 ${name}

	4.标签模板
	模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。



 */

{
	let str = 'abcd';
	for(let i = 0; i < str.length; i++) {
		console.log('es5', str[i]);
	}
	for(let code of str) {
		console.log('es6', code);
	}
	console.log(str);
}

{
	let str = 'abcdefg';
	console.log(str.includes('cde'));
	console.log(str.startsWith('ab'));
	console.log(str.endsWith('fg'));
}


{
	let age = "12";
	let name = "zhangsan";
	console.log(`${name} 今年 ${age}` + `了`);
}

//
{
	let user = {
		name: '张三',
		age: 12
	}

	abc`我的名字是 ${user.name} ,今年${user.age}岁了`;
	function abc(s, v1, v2) {
		console.log(s, v1, v2);
	}
}

