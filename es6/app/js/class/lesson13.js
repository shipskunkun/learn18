/*
proxy reflect
需要掌握的：
1.什么意思
	代理和反射
2.
*/

{
	let obj = {
		name: 'zhangsan001',
		age: '12',
		add: 'beijing'
	};

	let monitor = new Proxy(obj, {
		// 拦截对象属性的读取
		get(target, key){
			return target[key].replace('zhangsan', 'lisi');
		},
		//拦截设置对象属性
		set(target, key, value) {
			if(key === 'name') {
				return target[key] = value;
			}
			else {
				return target[key];
			}
		}
	});

	//直接打印出来，还是zhangsan
	console.log('monitor', monitor);
	//lisi
	console.log('get', monitor.name);

	monitor.name = 'wangwu';
	console.log('monitor', monitor);
	console.log('set', monitor.name);

	monitor.age = '123';
	console.log('monitor', monitor);
	console.log('set', monitor.age);

}







