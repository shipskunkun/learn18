/*
iterator
需要掌握的：
1. 哪些数据有迭代器接口
	Array
	Map
	Set
	String
	TypedArray
	函数的 arguments 对象
	NodeList 对象

	对于普通的对象，for...in循环可以遍历键名，for...of循环会报错。
	一种解决方法是，使用Object.keys方法将对象的键名生成一个数组，然后遍历这个数组。
	另一个方法是使用 Generator 函数将对象重新包装一下。

	for...in循环有几个缺点。

2. 如何自己实现一个迭代器
	我们通过next(),函数调用，每次调用，返回一个方法，
	这个方法返回两个值，是否完成遍历done，当前index指向的值

	如何跳出循环？怎么修复forEach的缺点

3. for of 使用
	for...in循环读取键名，for...of循环读取键值。如果要通过for...of循环，
	获取数组的索引，可以借助数组实例的entries方法和keys方法


4. 如何自己实现一个迭代器
一种数据结构只要部署了 Iterator 接口，
我们就称这种数据结构是“可遍历的”（iterable）。
 */



{
	let arr = ['abc', 'def', 'g'];
	console.log('arr', arr);

	let map = arr[Symbol.iterator]();
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());

}