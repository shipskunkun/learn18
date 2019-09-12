/*
斐波那契数列
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ... 求第n个数是多少
 */

function fibonacci(num) {
	if(num <=0 ){
		return;
	}
	if( num === 1 && num ===2) {
		return 1;
	}
	return fibonacci(num-1) + fibonacci(num-2);
}

function fibonacci2(num) {
	let arr = [1, 1];
	if(num <=0 ){
		return;
	}
	if(num === 1 && num === 2) {
		return 1;
	}
	for(let i = 2; i < num; i++) {
		arr[i] = arr[i-1] +arr[i-2];
 	}
	return arr[num-1];
}

function fibonacci3(num) {
	var pre = 1;
	var next = 1;
	if(num <=0 ){
		return;
	}
	for(let i = 2; i < num; i++) {
		let temp = pre;
		pre =  next;
		next = pre + temp;
	}
	return next;

}

function fibonacci4(n, a = 1, b = 1) {
  if (n === 1) return a;
  return fibonacci4(n - 1, b, a + b)
}

console.log(fibonacci(-1));

console.log(fibonacci2(10));

console.log(fibonacci3(10));

console.log(fibonacci4(10));