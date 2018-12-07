/*
Symbol用法
需要掌握的：
1.概念
	生成唯一的一个值
	Symbol.for('key'), key值,如果key值存在，返回原来的对象
2.作用
	继承的变量中也有相同的key，而不会代替
3. 为什么Object.entries 中没有？Symbol 类型的数据
4. 怎样才能打印出来
 */


{
	let a1 = Symbol();
	let a2 = Symbol();
	console.log('a1 === a2', a1 === a2);

	let a3 = Symbol.for('a3');
	let a4 = Symbol.for('a3');
	console.log('a3 === a4', a3 === a4);
}

{
	let a1 = Symbol.for('abc');
	let obj = {
		[a1]: '123',
		'abc': 345,
		'c': 456
	}
	console.log(obj);

	//非Symbol属性
	for(let [key, value] of Object.entries(obj)) {
		console.log('let of', key, value);
	}

	// Symbol类型的
	Object.getOwnPropertySymbols(obj).forEach(function (value) {
		console.log(obj[value]);
	})

	Reflect.ownKeys(obj).forEach(function(value) {
		console.log('ownKeys', obj[value]);
	})


}