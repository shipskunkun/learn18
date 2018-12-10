/*
模块化
需要掌握的:
1. 在引入的文件中，需要哪个模块，就import {需要的模块}
2. import * as name1 from
不提倡这样写


3. export default
	把命名交给引用的文件

 */


/*
export let A = 123;
export function test() {
	console.log('test');
}
export class Hello {
	test () {
		console.log('test');
	}
}
*/

let A = 123;
function test() {
	console.log('test');
}
class Hello {
	test () {
		console.log('test');
	}
}

export default {
	A,
	test,
	Hello
}

















