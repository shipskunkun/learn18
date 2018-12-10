/*
类和对象
需要掌握的：
1. 怎么定义
2. 如何继承
	子类如何修改继承的属性
	super一定要在子类的构造函数第一行
3. get、set 属性
4. 类的静态方法、静态属性
	通过类调用而不是实例调用
 */

{
	class Person{
		constructor(name = 'z', age = 11) {
			this.name = name;
			this.age = age;
		}
	}

	class Student extends Person{
		constructor(name = 'lisi', age){
			super(name, age);
			this.add = 'beijing';
		}
	}

	let s = new Student();
	console.log(s);
}



{
	class Person{
		constructor(name = 'zhang', age = 11) {
			this.name = name;
			this.age = age;
		}
		get longName() {
			return 'longName ' + this.name;
		}
		set longName(value) {
			this.name = 'longName ' + value;
		}


		static hello() {
			console.log('静态方法hello');
		}
	}

	Person.attr = '123';

	let t = new Person();
	console.log('getter', t.longName);
	t.name = 'hello';
	console.log('setter', t.longName);

	console.log('静态方法', Person.hello());
	console.log('静态属性', Person.attr);
}










