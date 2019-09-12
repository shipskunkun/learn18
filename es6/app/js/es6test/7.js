/*
科学防抖，在函数触发时间小于间隔，不执行
 */

{

	let  time = 2000;
	function fn() {
		console.log('执行点击事件');
	}
	function fangdou(fn, time) {
		if(timer) {
			clearTimeout(timer);
		}
		var timer = setTimeout(
			function(){
				fn();
			}, time);
	}


}