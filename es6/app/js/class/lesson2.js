
/*
	解构赋值，哪些应用场景?
	1.数组解构赋值
	2.对象解构赋值
	3.字符串、布尔、解构赋值
	4.函数参数解构赋值
	5.数值解构赋值
 */

{
	let a, b;
	[a, b] = [1, 2];
	console.log(a, b);
}

{
	let a, b, rest;
	[a, b, ...rest] = [1,2,3,4,5,6];
	console.log(a, b, rest);
}

{
	let a, b;
	({a, b} = {a: "six", b: "five"});
	console.log(a, b);
}


{
	let a, b, c;
	[a, b, c = 3] = [1,2];
	console.log(a, b, c);
}

//用于接受从方法中拿到的值
{
	function f() {
		return {age: 12, name: "zhang"}
	}
	let age, name;
	({age, name} = f());
	console.log(age, name);

}

/*
	直接 {} = {} 不行
	({} = {})  为啥可以？
	let {name, age} = o 也可以？

 */
{
	// let o = {name: "li", age: 123};
	// let {name, age} = o ;
	// let name, age;
	// ({name, age} = {name: "li", age: 123}); 
	//等价于：
	let {name: name, age: age} = {name: "lisi", age: 123}
	console.log(name, age);
}

//复杂一点儿的数据
{
	let metaData = {
		title: 'abc',
		test: [{
			title: 'test',
			desc: 'description'
		}]
	}
	let {title: ceshi, test: [{title: cesi2, desc: cesi3}]} = metaData;
	console.log(ceshi, cesi2, cesi3);
}






