/*
set map
需要掌握的
1. Set的用法, 和数组的区别
	里面的数据是惟一的
	作用：去重，但是不会做数据类型的转换
	方法和属性：add,delete,clear,has  size
	遍历：keys 和 values 值是一样的

2. Map的用法, 和Object的区别
*/

{
	let list = new Set();
	list.add(2);
	list.add(3);

	console.log(list.size);
}

{
	let arr = [1, 2, 2, 3, 4, 4];
	let arr2 = [1, 2, '2', 3, 4, 4];
	let list = new Set(arr);
	let list2 = new Set(arr2);
	console.log('list', list);
	console.log('list2', list2);
}

{
	let arr = ['add', 'delete', 'has', 'clear'];
	let list = new Set(arr);

	console.log('list', list);
	console.log('has', list.has('add'));


	list.delete('add');
	console.log('list', list);

	list.clear();
	console.log('list', list);
}

{
	let arr = ['add', 'delete', 'has', 'clear'];
	let list = new Set(arr);
	for(var item of list) {
		console.log(item);
	}

	for(var item of list.keys()) {
		console.log('keys', item);
	}

	//和上面一样
	for(var item of list.values()) {
		console.log('values', item);
	}

	// ["add", "add"]  ["delete", "delete"] ["has", "has"] ["clear", "clear"]
	for(var item of list.entries()) {
		console.log('entries', item);
	}

	list.forEach(function(item) {
		console.log('forEach', item);
	})
}















