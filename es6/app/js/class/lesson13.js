/*
proxy reflect
需要掌握的：
1.什么意思
	代理和反射
2.常用的方法
	get, 使用 . 获取属性的时候
	set, 设置， 改变对象的属性时
		set方法的第四个参数receiver，
		指的是原始的操作行为所在的那个对象，一般情况下是proxy实例本身

	has, 拦截 key in object
	deleteProperty, 拦截delete
	ownKeys, 拦截Object.keys 等

3. reflect 用法
	只要proxy 有的属性和方法，Reflect 都有，而且不需要new, 直接使用

4. 实际应用场景
*/

{
	let obj = {
		name: 'zhangsan',
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
		},

		// 拦截 key in object
		has(target, key) {
			if(key == 'name') {
				return true;
			}
			else {
				return false;
			}
		},

		//拦截delete
		deleteProperty(target, key) {
			//允许删除name这个属性
			if(key === 'name') {
				delete target[key];
				return true;
			}
			else {
				return target[key];
			}
		},

		//拦截 Object.keys Object.getOwnPropertySymbols
		ownKeys(target, value) {
			return Object.keys(target).filter(item => item != 'age');
		}
	});

	//读取的时候，打印出来是 lisi
	console.log('get', monitor.name);
	//但是打印这个对象，还是zhangsan
	console.log('monitor', monitor);

	monitor.name = 'wangwu';
	console.log('set name', monitor.name);
	//变成wangwu
	console.log('monitor', monitor);

	monitor.age = '123';
	console.log('set age', monitor.age);
	//不变，还是12
	console.log('monitor', monitor);

	console.info({
		'name in monitor':'name' in monitor,
		'age in monitor': 'age' in monitor
	});

	// delete monitor.name;
	// console.info('delete', monitor);

	console.info({
		'ownKeys': Object.keys(monitor)
	} )

	// 注意，Reflect 不需要new
	// 不需要直接操作 obj 使用Reflect
	console.log('reflect', Reflect.get(obj, 'name'));
	Reflect.set(obj, 'name', '王宝强');
	console.log(obj);
	console.log('reflect has', Reflect.has(obj, 'name'));

}



/*
实际应用场景：我们new 一个 person类对象
在这个对象的构造函数中，返回一个 proxy对象, 所有对这个对象的操作都是 对proxy的操作
这个proxy对象来自哪里？
来自一个验证方法，接受对象，和验证规则对象
返回对象的proxy
 */


{
	//规则
	//简单版
	// let rules = {
	// 	name: false,
	// 	age: true
	// }

	// 可以对值进行验证
	let rules = {
		name(value) {
			return value.startsWith('张');
		},
		age(value) {
			return value - 100 < 0;
		}
	}
	//对象
	class Person {
		constructor(name, age) {
			this.name = name;
			this.age = age;
			return getProxy(this, rules)
		}
	}

	function getProxy(obj, rules) {
		return new Proxy(obj, {
			set: function(target, key, value) {
				if(target.hasOwnProperty(key)) {
					let va = rules[key];
					if(!!va(value)) {
						return Reflect.set(target, key, value);
					}
					else{
						console.log(`不能设置${key}到${value}`);
						return true;
					}
				}
				else {
					throw Error (`${key}不存在` );
				}
			}
		})
	}

	let zhangsan =  new Person("zhangsan", 12);
	console.log('person1', zhangsan);

	zhangsan.name = '李四';
	console.log('person2', zhangsan);

	zhangsan.name = '张大总管';
	console.log('person3', zhangsan);

	zhangsan.age = 60;
	console.log('person4', zhangsan);

	zhangsan.age = 123;
	console.log('person5', zhangsan);

}






