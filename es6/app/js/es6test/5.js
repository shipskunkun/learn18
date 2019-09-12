// 获取url中相应字符

{
	let url = 'http://10.112.34.230:9091/afp#/afp/orderitem/preEdit?from=FlistMy&id=1559&isedit=1&isModifiable=0&firstPriority=0';
	//获取firstPriority的值
	function getUrl(url, name) {
		let arr = url.split("?")[1].split("&");
		let obj = {};
		arr.forEach(function(item, index) {
			obj[item.split("=")[0]] = item.split("=")[1];
		})
		return obj[name];
	}

	function getUrlReg(url, name) {
		let str = url.split("?")[1];
	}

	let arr = [1, 3, 3, 4, 4, 5, NaN, "3", NaN];

	// arr =  Array.from(new Set(arr));

	let result = [];
	let obj = {};
	arr.forEach(function (item, index) {
		if(result.indexOf(item) == -1) {
			result.push(item);
		}

	})
	console.log(result);
	// console.log(arr);
}