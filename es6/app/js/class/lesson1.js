/*
	let  var const
 */
function test() {
	let a = 1;
	console.log(a);
}
/*
	1.实验证明，当常量是数组或对象时，可以修改const的，但是不能修改地址
	2.必须在声明时候赋值，否则报错

 */
function changeConst() {
	const arr = [1, 2, 3];
	arr[1] = 4;
	// arr = [4,5,6];

	const obj = {
		name: "zhangsan"
	}

	obj.age = 12;
	console.log(obj);


	const variable = "string";
	// variable = "boolean";
	console.log(variable);
}

function f() {
	console.log('I am outside!');
}

(function() {
	if (false) {
		// 重复声明一次函数f
		function f() {
			console.log('I am inside!');
		}
	}

	f();
}());

changeConst();