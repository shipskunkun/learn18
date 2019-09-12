{
	//slice 是深拷贝么？不是，同理concat
	/*
	var arr = [1,2,3,4]
	// var copyArr = arr.slice();
	var copyArr = arr.concat();
	copyArr[0] = 10;
	console.log(copyArr); // [10,2,3,4]
	console.log(arr); // [1,2,3,4]

	var arr = [
	  {number:1},
	  {number:2},
	  {number:3}
	];
	// var copyArr = arr.slice();
	var copyArr = arr.concat();
	copyArr[0].number = 10;
	console.log(copyArr);  // [{number: 10}, { number: 2 },{ number: 3 }]
	console.log(arr); // [{number: 10}, { number: 2 }, { number: 3 }]
	*/


	/*
	//直接拷贝,gg 最后都变成 shanghai了
	  var obj = {
	    add: {
	    	prov: 'anhui',
	    	city: 'hefei'
	    },
	    job: "coder"
	  };

	  function copy (arg) {
	    let newobj = {}
	    for(let item in obj) {
	      newobj[item] = obj[item];
	    }
	    return newobj;
	  }
/*
	  var copyobj = copy(obj);

	  copyobj.add.prov = 'shanghai';
	  copyobj.add.city = 'shanghai';

	  console.info(copyobj);
	  console.info(obj);

	




let obj2 = Object.assign({}, obj);
obj2.add.prov = 'shanghai';
console.log('obj', obj);
console.log('obj2', obj2);









 let obj3 = JSON.parse(JSON.stringify(obj));
obj3.add.prov = 'beijing';
console.log('obj', obj);
console.log('obj3', obj3);


function deepCopy(obj){
    var newobj = obj.constructor === Array ? [] : {};
    for(var i in obj){
        newobj[i] = typeof obj[i] === 'object' ? 
        deepCopy(obj[i]) : obj[i]; 
    }
    return newobj;
};
*/
let obj = {
    add: {
    	prov: 'anhui',
    	city: 'hefei'
    },
    job: "coder",
    girlfriend: undefined,
    birth: new Date('1990-01-01'),
    regExp: new RegExp(/test/ig),
    eat: function() {
    	console.log("妹子喜欢吃牛排");
    }
  };



 function deepCopy(obj) {

 	var newobj = obj.constructor === Array ? [] : {};
 	if(typeof obj!== 'object') {
 		return;
 	}
 	for(let i in obj) {
 		if (obj.hasOwnPropertyOf(i)) {
 			if(typeof obj[i] === 'object') {
 				newobj[i] = deepCopy(obj[i]);
 			}
 			else {
 				newobj[i] = obj[i];
 			}
 		}
 	}
 	return newobj;
 }



//简便写法



let obj4 = deepCopy(obj);
// obj4.add.prov = 'beijing';
console.log('obj', obj);
console.log('obj4', obj4);






}