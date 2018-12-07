/*
es6数组扩展
需要掌握的：
1.Array.of 数值变数组
2.Array.from 类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
  Array.from还可以接受第二个参数，作用类似于数组的map方法，用来对每个元素进行处理，将处理后的值放入返回的数组。
3.fill
4.entries\keys\values
5.find\findIndex
6.includes


 */

{
	let arr = Array.of(1, 2, 3);
	// console.log('arr', arr);

	let empty = Array.of();
	// console.log('empty', empty);
}

{
	let arr = document.querySelectorAll('p');
	// console.log('arr', arr);
	arr = Array.from(arr);
	arr.forEach(function(value, index) {
		// console.log(value.innerHTML);
	})
}

{
	let arr = [1,2,undefined].fill(8);
	//从1到3位置，换成8
	arr = [1,2,undefined].fill(8, 1, 3);
	// console.log('arr fill', arr);
}


{
	let arr = Array.of('a', 'b', 'c');
	for(let i of arr.keys()) {
		console.log('keys', i);
	}
	for(let i of arr.values()) {
		console.log('values', i);
	}
	for(let i of arr.entries()) {
		console.log('entries', i);
	}
}


{
	let arr = [1, 3, 4, 5, 6, 7];
	let findValue = arr.find(function(item) {
		return item > 5;
	})
	let findValueIndex = arr.findIndex(function(item) {
		return item > 5;
	})
	console.log("find", findValue, findValueIndex);
}

{
	let arr = [1, NaN];
	console.log(arr.indexOf(NaN));
	console.log(arr.includes(NaN));
}







