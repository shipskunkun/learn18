/*
对象扩展
需要掌握的：
1. 对象的简介表示
2. 方法的简介表示
3. 新增API，Object.is 和 === 区别
	Object.is()，其行为与===基本一致，不过有两处不同：
	+0不等于-0。
	NaN等于自身。
4. Object.assign 和 $.extend() 有什么区别
	不能拷贝，继承的属性，和不可枚举的属性
5. Object.entries
 */

{
	let name = 'zhang';
	let age = 12;
	let es5 = {
		name: name,
		age: age
	}
	let es6 = {
		name,
		age
	}
	console.log(es5, es6);
}

{
	let es5_method = {
		hello: function () {
			console.log('es5_method');
		}
	}
	let es6_method = {
		hello() {
			console.log('es6_method');
		}
	}
	es5_method.hello();
	es6_method.hello();
}

//属性表达式
{
	let a = 'b';
	let es5_obj = {
		a: 'c'
	}

	let es6_obj = {
		[a]: 'c'
	}
	console.log(es5_obj, es6_obj);
	a = 'dadada';
	console.log(es5_obj, es6_obj);
}

//判断两个对象是否相等
{
	let is = Object.is(NaN, NaN);
	console.log('NaN is NaN', is);
	console.log('NaN === NaN', NaN === NaN);

	console.log('+0 is -0', Object.is(+0, -0));
	console.log('+0 === -0', +0 === -0);

	let arr1 = [1, 2, 3];
	let arr2 = [1, 2, 3];
	let arr3 = arr2;
	console.log('arr1 === arr2', Object.is(arr1, arr2));
	console.log('arr2 === arr3', Object.is(arr2, arr3));
}

{
	let person = {name: 'zhangsan', age: 12};
	let person2 = Object.assign(person, {add: 'beijing'});
	console.log('person2', person2);

	for(let v of Object.entries(person)) {
		console.log(v);
	}

	for (let i of ['a', 'b', 'c'].entries()) {
		console.log(i);
	}
	// 注意 [].entries 是数组才有的方法，对象用会报错
}




