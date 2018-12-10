/*
iterator
需要掌握的：
1. 哪些数据有迭代器接口
	数组
2. 使用的基本用法
3. for of

4. 如何自己实现一个迭代器
 */



{
	let arr = ['abc', 'def', 'g'];
	console.log('arr', arr);

	let map = arr[Symbol.iterator]();
	console.log(map.next());
	console.log(map.next());
	console.log(map.next());

}